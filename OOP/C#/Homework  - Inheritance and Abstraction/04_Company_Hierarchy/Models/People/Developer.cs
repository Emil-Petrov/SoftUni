namespace Company_Hierarchy.Models.People
{
    using System.Collections.Generic;
    using Enums;
    using Interface.People;
    using Jobs;
    class Developer : Employee, IDeveloper
    {
        public Developer(string id, string firstName,
            string lastName, Departments deparment,
            double salary, List<Project> projects) 
            : base(id, firstName, lastName, deparment, salary)
        {
            this.Projects = projects;
        }

        public List<Project> Projects { get; private set; }
    }
}
