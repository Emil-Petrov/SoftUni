using System.Linq;

namespace TheSlum
{
    using System;
    using System.Collections.Generic;
    using Interfaces;
    class Warrior : Character, IAttack
    {

        public Warrior(string id, int x, int y, Team team)
            : base(id, x, y, 200, 100, team, 50)
        {
            this.AttackPoints = 150;
            this.IsAlive = true;
        }

        public int AttackPoints { get; set; }

        public override Character GetTarget(IEnumerable<Character> targetsList)
        {
            Character closestTarget = null;
            double closestRange = double.MaxValue;
            foreach (var target in targetsList)
            {
                double calculateRange = Math.Sqrt(Math.Pow(this.X - target.X, 2) + Math.Pow((this.Y - target.Y), 2));
                if (calculateRange <= closestRange && target != this && target.IsAlive)
                {
                    closestRange = calculateRange;
                    closestTarget = target;
                }
            }
            if (closestTarget != null)
            {
                Console.WriteLine("{0} swings at {1} for {2}. {1} has {3} hp left.", 
                    this.Id, closestTarget.Id, this.AttackPoints, closestTarget.HealthPoints-this.AttackPoints);
            }
            return closestTarget;
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
