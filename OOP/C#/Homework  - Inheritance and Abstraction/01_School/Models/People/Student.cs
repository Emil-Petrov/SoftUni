namespace _01_School.Models.People
{
    class Student : Person
    {
        public Student(string name, int classNumber, string details = null)
            :base(name, details)
        {
            this.ClassNumber = classNumber;
        }

        public int ClassNumber { get; set; }
    }
}
