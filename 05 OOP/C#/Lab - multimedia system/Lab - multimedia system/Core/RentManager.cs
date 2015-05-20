using System.Runtime.CompilerServices;

namespace Shop.Core
{
    using System.Linq;
    using System;
    using System.Collections.Generic;
    using Exceptions;
    using Marketing;
    using Items;

    internal class RentManager
    {
        private static HashSet<Rent> _rents = new HashSet<Rent>();
        private static ShopEngine _shop;

        public static void Rent(string id, DateTime rentDate, DateTime deadline, ShopEngine shop)
        {
            _shop = shop;
            Item item = FindItem(id);
            ReduceSupply(item);
            AddRent(item, rentDate, deadline);
        }

        public static HashSet<Rent> ShowRents()
        {
            return _rents;
        }
        private static Item FindItem(string id)
        {
            return _shop.Supplies.Keys.Where(item => item.Id == id).Cast<Item>().FirstOrDefault();
        }
        private static void ReduceSupply(Item item)
        {
            if (_shop.Supplies[item] > 0)
            {
                _shop.Supplies[item] -= 1;
            }
            else
            {
                throw new InsufficentSuppliesException("");
            }
        }
        private static void AddRent(Item item, DateTime rentDate, DateTime deadline)
        {
            Rent rent = new Rent(item, rentDate, deadline);
            _rents.Add(rent);
        }
    }
}
