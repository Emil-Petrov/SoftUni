namespace _01_School.Models.Classes
{
    class Discipline : Study
    {

        public Discipline(string name, int lecturersCount, int studentsCount, string details = null)
            :base(name,details)
        {
            this.LecturersCount = lecturersCount;
            this.StudentsCount = studentsCount;
        }

        public int LecturersCount { get; set; }
        public int StudentsCount { get; set; }

    }
}
