
namespace _01_School.Models.Classes
{
    abstract class Study
    {

        protected Study(string name, string details)
        {
            this.Name = name;
            this.Details = details;
        }

        public string Name { get; private set; }
        public string Details { get; set; }
    }
}
