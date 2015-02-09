using System;

namespace _02_Human_Student_Worker.Models
{
    class Student : Human
    {
        private int _faultyNumber;

        public Student(string firstName, string lastName, int faultyNumber)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.FaultyNumber = faultyNumber;
        }

        public int FaultyNumber
        {
            get { return this._faultyNumber; }
            set
            {
                if (value.ToString().Length < 5 || value.ToString().Length > 10)
                {
                    throw new ArgumentOutOfRangeException("Number lenght must be between 5 and 10 digits.");
                }
                this._faultyNumber = value;
            }
        }

        public override string ToString()
        {
            return string.Format("{0}: {1} {2}", this.FaultyNumber, this.FirstName, this.LastName);
        }
    }
}
