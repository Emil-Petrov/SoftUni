using System;
using Company_Hierarchy.Enums;

namespace Company_Hierarchy.Models.Jobs
{
    using Interface.Jobs;

    class Project : IProject
    {
        private string _name;

        public Project(string name, DateTime projectStart, string details)
        {
            this.Name = name;
            this.StartDate = projectStart;
            this.Details = details;
            this.State = ProjectState.Open;
        }

        public string Name
        {
            get { return this._name; }
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("Product name cannot be null");
                }
                this._name = value;
            }
        }
        public DateTime StartDate { get; private set; }
        public string Details { get; private set; }
        public ProjectState State { get; private set; }

        public void CloseProject()
        {
            this.State = ProjectState.Closed;
        }
    }
}
