namespace _01_School.Models.People
{
    public abstract class Person
    {
        protected Person(string name, string details)
        {
            this.Name = name;
            this.Details = details;
        }

        public string Name { get; private set; }
        public string Details { get; set; }
    }
}
