using System;
using System.Runtime.CompilerServices;

namespace _02_Human_Student_Worker.Models
{
    class Worker : Human
    {
        private int _workHoursPerDay;
        private double _weekSalary;

        public Worker(string firstName, string lastName, int workHoursPerDay, double weekSalary)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.WorkHoursPerDay = workHoursPerDay;
            this.WeekSalary = weekSalary;
        }

        public double WeekSalary
        {
            get { return this._weekSalary; }
            set
            {
                if (value <= 0)
                {
                    throw new ArgumentOutOfRangeException("Salary must be above 0 be negative");
                }
                this._weekSalary = value;
            }
        }
        public int WorkHoursPerDay
        {
            get { return this._workHoursPerDay; }
            set
            {
                if (value > 24 || value < 1)
                {
                    throw new ArgumentOutOfRangeException("Work hours should be between 1 and 24");
                }
                this._workHoursPerDay = value;
            }
        }


        public double MoneyPerHour()
        {
            //Assuming di... workdays are from monday to friday
            return Math.Round((WeekSalary / 5) / WorkHoursPerDay,2);
        }

        public override string ToString()
        {
            return string.Format("Pay: {0:c} per hour; Name: {1} {2};", this.MoneyPerHour(), this.FirstName, this.LastName);
        }
    }
}
