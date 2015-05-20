
namespace TheSlum
{
    using System.Linq;
    using System;
    using System.Collections.Generic;
    using Interfaces;
    class Mage : Character, IAttack
    {
        public Mage(string id, int x, int y, Team team)
            : base(id, x, y, 150, 50, team, 5)
        {
            this.AttackPoints = 300;
            this.IsAlive = true;
        }

        public int AttackPoints { get; set; }

        public override Character GetTarget(IEnumerable<Character> targetsList)
        {
            Character furthestTarget = null;
            double furthestRange = double.MinValue;

            foreach (var target in targetsList)
            {
                double calculateRange = Math.Sqrt(Math.Pow(this.X - target.X, 2) + Math.Pow((this.Y - target.Y), 2));

                if (target.Team != this.Team && target != this)
                {
                    if (calculateRange >= furthestRange)
                    {
                        furthestRange = calculateRange;
                        furthestTarget = target;
                    }
                }
            }
            if (furthestTarget != null)
            {
                Console.WriteLine("{0} is firing at {1} for {2}. {1} has {3} hp left.",
                    this.Id, furthestTarget.Id, this.AttackPoints,furthestTarget.HealthPoints-this.AttackPoints);
            }
            return furthestTarget;
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
            Console.WriteLine("{0} fades",item.Id);
        }

        protected override void ApplyItemEffects(Item item)
        {
            this.HealthPoints += item.HealthEffect;
            this.AttackPoints += item.AttackEffect;
            this.DefensePoints += item.DefenseEffect;
        }

        protected override void RemoveItemEffects(Item item)
        {
            this.HealthPoints -= item.HealthEffect;
            this.AttackPoints -= item.AttackEffect;
            this.DefensePoints -= item.DefenseEffect;

            if (this.HealthPoints < 0 && item.HealthEffect > 0)
            {
                this.HealthPoints = 1;
            }
        }

        public override string ToString()
        {
            return String.Format("Name: {0}, Team: {2}, Health: {1}, Defense: {3}, Attack {4}",
               this.Id, this.HealthPoints, this.Team.ToString(), this.DefensePoints, this.AttackPoints);
        }
    }
}
