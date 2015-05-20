namespace Shop.Core
{
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;
    using Interface;
    using Items;
    using Enums;

    public class ShopEngine : IEngine
    {
        private Dictionary<IItem, int> _supplies = new Dictionary<IItem, int>();

        public Dictionary<IItem, int> Supplies
        {
            get { return this._supplies; }
            private set
            {
                this._supplies = value;
            }
        }

        public void Run()
        {
            //TODO Make pigs fly
            while ("pigs" != "fly")
            {
                string command = Console.ReadLine();
                string[] input = ParseInput(command);
                ExecuteInput(input);
            }
        }

        private string[] ParseInput(string input)
        {
            string[] parameters = input.Split(' ');
            return parameters;
        }
        private Dictionary<string, string> ParseParameters(string parameters)
        {
            Dictionary<string, string> keyValuePairs = new Dictionary<string, string>();
            string[] pairs = parameters.Split('&');

            foreach (var pair in pairs)
            {
                string[] keyValuePair = pair.Split('=');
                keyValuePairs[keyValuePair[0]] = keyValuePair[1];
            }

            return keyValuePairs;
        }
        private void ExecuteInput(string[] input)
        {
            string action = input[0];
            switch (action)
            {
                case "supply":
                    string type = input[1];
                    int quantity = int.Parse(input[2]);
                    var parameters = ParseParameters(input[3]);
                    Item item = CreateItem(type, parameters);
                    Supply(item, quantity);
                    break;
                case "sell":
                    string saleId = input[1];
                    DateTime saleDate = DateTime.ParseExact(input[2], "dd-MM-yyyy", CultureInfo.InvariantCulture);
                    Sell(saleId, saleDate);
                    break;
                case "rent":
                    string rentId = input[1];
                    DateTime rentDate = DateTime.ParseExact(input[2], "dd-MM-yyyy", CultureInfo.InvariantCulture);
                    DateTime deadline = DateTime.ParseExact(input[3], "dd-MM-yyyy", CultureInfo.InvariantCulture);
                    Rent(rentId, rentDate, deadline);
                    break;
                case "report":
                    string reportType = input[1];
                    ReportManager.Report(reportType);
                    break;
                case "fly":
                    Console.WriteLine("What are the odds");
                    Environment.Exit(0);
                    break;
            }
        }

        private void Supply(IItem item, int quantity)
        {
            bool hasItem = false;

            var key = this.Supplies.Keys.ToList().Find(element => element.Id == item.Id);
            if (key != null)
            {
                hasItem = true;
                this.Supplies[key] += quantity;
            }
            if (!hasItem)
            {
                this._supplies.Add(item, quantity);
            }
        }
        private void Sell(string id, DateTime saleDate)
        {
            SaleManager.Sell(id, saleDate, this);
        }
        private void Rent(string id, DateTime rentDate, DateTime deadline)
        {
            RentManager.Rent(id, rentDate, deadline, this);
        }

        //TODO Shove this into a supply manager
        private Item CreateItem(string type, Dictionary<string, string> parameters)
        {
            string id = parameters["id"];
            string title = parameters["title"];
            decimal price = decimal.Parse(parameters["price"]);
            string genre = parameters["genre"];

            switch (type)
            {
                case "book":
                    string author = parameters["author"];
                    var book = new Book(id, title, price, author, genre);
                    return book;
                case "video":
                    int length = int.Parse(parameters["length"]);
                    var video = new Video(id, title, price, length, genre);
                    return video;
                case "game":
                    AgeRestriction ageRestriction =
                        (AgeRestriction)Enum.Parse(typeof(AgeRestriction),
                        parameters["ageRestriction"]);
                    var game = new Game(id, title, price, genre, ageRestriction);
                    return game;
                default:
                    return null;
            }
        }
    }
}