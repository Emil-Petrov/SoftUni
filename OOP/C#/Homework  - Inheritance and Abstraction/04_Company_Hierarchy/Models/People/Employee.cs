using System;

namespace Company_Hierarchy.Models.People
{
    using Interface.People;
    using Enums;
    class Employee : Person, IEmployee
    {
        private double _salary;

        public Employee(string id, string firstName,
            string lastName, Departments deparment,
            double salary) 
            : base(id, firstName, lastName)
        {
            this.Department= deparment;
            this.Salary = salary;
        }


        public double Salary
        {
            get { return this._salary; }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException("Salary cannot be negative");
                }
                this._salary = value;
            }
        }
        public Departments Department { get; private set; }
    }
}
