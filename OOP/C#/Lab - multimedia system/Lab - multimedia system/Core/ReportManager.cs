
namespace Shop.Core
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Enums;
    using Reports;
    using Marketing;

    internal class ReportManager
    {
        private static HashSet<Report> _reports = new HashSet<Report>();
        private static DateTime _startDate = DateTime.MinValue;
        
        public static void Report(string type)
        {
            GenerateReports(type);
            PrintReports();
            _reports.Clear(); //TODO Avoid emptying list every time by adding a set of reports in each of the managers and making this. not static.
        }
        public static void Report(string type, DateTime startDate)
        {
            _startDate = startDate;
            GenerateReports(type);
            PrintReports();
            _reports.Clear();
        }
        private static void GenerateReports(string type)
        {
            switch (type)
            {
                case "rents":
                    var rents = RentManager.ShowRents()
                        .Where(rent => rent.RentState == RentState.Overdue)
                        .OrderBy(rent => rent.CalculateFine())
                        .ThenBy(rent => rent.Item.Title);
                    foreach (var rent in rents)
                    {
                        _reports.Add(new RentReport(rent));
                    }
                    break;
                case "sales":
                    List<Sale> sales = SaleManager.ShowSales().Where(sale => sale.SaleDate > _startDate).ToList();
                    foreach (var sale in sales)
                    {
                        _reports.Add(new SaleReport(sale));
                    }
                    break;
                default:
                    break;
            }
        }

        //TODO Fix sale display
        private static void PrintReports()
        {
            foreach (var report in _reports)
            {
                Console.WriteLine(report.GenerateReport());
            }
        }
    }
}
