namespace _03_Student_Class
{
    using System;

    class Test
    {
        static void Main()
        {
            Student student = new Student("Obama", 22);

            student.PropertyChanged += (sender, eventArgs) =>
            {
                Console.WriteLine("Property changed: {0} (from {1} to {2})",
                    eventArgs.PropertyName, eventArgs.OldValue, eventArgs.NewValue);
            };

            Console.WriteLine(student);
            student.Name = "Pikachu";
            student.Age = 100;
            Console.WriteLine(student);
        }
    }
}
