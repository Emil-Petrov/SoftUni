namespace _01_School.Models.People
{
    using System.Collections.Generic;
    using _01_School.Models.Classes;
    class Teacher : Person
    {
        public List<Discipline> Disciplines { get; set; }

        public Teacher(string name, List<Discipline> disciplines,string details = null)
            :base(name, details)
        {
            this.Disciplines = disciplines;
        }
    }
}
