
namespace _01_School.Models.Classes
{
    using System.Collections.Generic;
    using _01_School.Models.People;

    class Class : Study
    {
        public Class(string name, List<Teacher> teachers,string details = null)
            :base(name, details)
        {
            this.Teachers = teachers;
        }

        public List<Teacher> Teachers { get; set; }

    }
}
