namespace Company_Hierarchy.Models.People
{
    using Enums;
    using Interface.People;
    using System.Collections.Generic;


    class Manager : Employee, IManager
    {
        public Manager(string id, string firstName,
            string lastName, Departments deparment,
            double salary, List<Employee> employees)
            : base(id, firstName, lastName, deparment, salary)
        {
            this.Employees = employees;
        }

        public List<Employee> Employees { get; private set; }
    }
}
