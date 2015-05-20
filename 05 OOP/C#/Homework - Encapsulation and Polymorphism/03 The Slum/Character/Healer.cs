
namespace TheSlum
{
    using System;
    using System.Collections.Generic;
    using Interfaces;

    class Healer : Character, IHeal
    {
        public Healer(string id, int x, int y, Team team)
            : base(id, x, y, 75, 50, team, 6)
        {
            this.HealingPoints = 60;
            this.IsAlive = true;
        }

        public int HealingPoints { get; set; }

        public override Character GetTarget(IEnumerable<Character> targetsList)
        {
            Character healTarget = null;
            int targetHp = int.MaxValue;

            foreach (var character in targetsList)
            {
                if (character.Team == this.Team && character != this)
                {
                    if (character.HealthPoints <= targetHp)
                    {
                        healTarget = character;
                    }
                }
            }
            if (healTarget != null)
            {
                Console.WriteLine("{0} is healing {1} for {3}. {1} has {2}hp", 
                    this.Id, healTarget.Id,healTarget.HealthPoints+this.HealingPoints,this.HealingPoints);
            }
            return healTarget;
        }

        public override void AddToInventory(Item item)
        {
            this.Inventory.Add(item);
            this.ApplyItemEffects(item);
        }

        public override void RemoveFromInventory(Item item)
        {
            this.Inventory.Remove(item);
            this.RemoveItemEffects(item);
        }

        public override string ToString()
        {
            return String.Format("Name: {0}, Team: {2}, Health: {1}, Defense: {3}, Healing: {4}",
                this.Id, this.HealthPoints, this.Team.ToString(), this.DefensePoints, this.HealingPoints);
        }
    }
}
