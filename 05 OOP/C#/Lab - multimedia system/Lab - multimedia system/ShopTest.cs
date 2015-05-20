namespace Testing
{
    using System.Globalization;
    using System.Threading;
    using Shop.Core;

    //  Enable if you want to try first wave of tests
    //using System;
    //using System.Collections.Generic;
    //using Shop.Enums;
    //using Shop.Items;
    //using Shop.Marketing;

    class ShopTest
    {

        static void Main()
        {
            Thread.CurrentThread.CurrentCulture = new CultureInfo("en-US"); // English - US

            //  Item Test
            //
            //Item sallingerBook = new Book("4adwlj4", "Catcher in the Rye", 20.00m, "J. D. Salinger", "fiction");
            //Item threeManBook = new Book("84djesd", "Three Men in a Boat", 39.99m, "Jerome K. Jerome", new List<string> { "comedy" });
            //Item acGame = new Game("9gkjdsa", "AC Revelations", 78.00m, "historical", AgeRestriction.Teen);
            //Item bubbleSplashGame = new Game("r8743jf", "Bubble Splash", 7.80m, new List<string> { "child", "fun" });
            //Item godfatherMovie = new Video("483252j", "The Godfather", 99.00m, 178, "crime");
            //Item dieHardMovie = new Video("9853kfds", "Die Hard 4", 9.90m, 144, new List<string> { "action", "crime", "thriller" });

            //  Sale Test
            //
            //DateTime today = DateTime.Now;
            //DateTime fiveYearsAgo = today.AddYears(-5);
            //Sale dieHardSale = new Sale(dieHardMovie, fiveYearsAgo);
            //Console.WriteLine(dieHardSale.SaleDate); // 1/30/2015 2:31:55 PM (today)
            //Sale acSale = new Sale(acGame);
            //Console.WriteLine(acSale.SaleDate); // 1/30/2010 2:31:55 PM

            //Rent Test
            //
            //DateTime afterOneWeek = today.AddDays(30);
            //Rent bookRent = new Rent(sallingerBook, today, afterOneWeek);
            //Console.WriteLine(bookRent.RentState); // Pending

            //  Rent Test 2
            //
            //DateTime lastMonth = today.AddDays(-34);
            //DateTime lastWeek = today.AddDays(-8);
            //Rent movieRent = new Rent(godfatherMovie, lastMonth, lastWeek);
            //Console.WriteLine(movieRent.RentState); // Overdue

            //  Rent Test 3
            //
            //movieRent.ReturnItem();
            //Console.WriteLine(movieRent.RentState); // Returned
            //Console.WriteLine(movieRent.ReturnDate); // 1/30/2015 2:41:53 PM
            //Console.WriteLine(movieRent.RentFine); // 7.9200

            ShopEngine engine = new ShopEngine();
            engine.Run();

            //  Engine Copy-Paste tests below.
            //  Using identation cuz Alt+Drag is too good and it's late and I can't hit the damn thing without selecting a row of slashes

            //    Test Supply
            //
            //  supply game 4 id=sfd33&title=Assassin's_Creed&price=19.00&genre=fiction&ageRestriction=Teen
            //  supply video 40 id=sfd332&title=The_Godfather&price=79.00&genre=crime&length=187
            //  supply book 5 id=4fd332&title=Boat&price=20&author=Sellinger&genre=comedy
            
            //    Test Selling stuff
            //
            //  supply book 5 id=4fd332&title=Razkazi&price=7.99&author=Elin_Pelin&genre=story
            //  supply game 19 id=9fkj332&title=Empire_Earth&price=17.60&ageRestriction=Minor&genre=strategy
            //  sell 4fd332 24-12-2014
            //  sell 9fkj332 13-01-2015
            //  sell 9fkj332 14-01-2015
            
            //    Test Rent
            //
            //  supply book 5 id=4fd332&title=Razkazi&price=7.99&author=Elin_Pelin&genre=story
            //  supply game 19 id=9fkj332&title=Empire_Earth&price=17.60&ageRestriction=Minor&genre=strategy
            //  rent 4fd332 24-12-2014 24-01-2015
            //  rent 9fkj332 13-01-2015 23-02-2015
            //  rent 9fkj332 14-01-2015 14-05-2015
            
            
            //    Test Reports
            //
            //  supply book 5 id=4fd332&title=Razkazi&price=7.99&author=Elin_Pelin&genre=story
            //  supply game 19 id=9fkj332&title=Empire_Earth&price=17.60&ageRestriction=Minor&genre=strategy
            //  rent 9fkj332 07-11-2014 07-01-2015
            //  rent 9fkj332 13-01-2015 23-02-2015
            //  rent 9fkj332 14-01-2015 14-05-2015
            //  rent 4fd332 24-12-2014 24-01-2015 
            //  report rents
            //  sell 4fd332 24-12-2014
            //  sell 9fkj332 13-01-2015
            //  sell 9fkj332 14-01-2015
            //  report sales 25-12-2014
        }
    }
}
