
namespace Animals
{
    using System;
    using Animals.Interface;

    public abstract class Animal : ISound
    {
        private string _name;
        private int _age;

        protected Animal(string name, int age, Genders gender)
        {
            this.Name = name;
            this.Age = age;
            this.Gender = gender;
        }

        public enum Genders
        {
            Male,
            Female
        }

        public string Name
        {
            get { return this._name; }
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("Name cannot be empty");
                }
                this._name = value;
            }
        }
        public int Age
        {
            get { return this._age; }
            set
            {
                if (value < 1 || value > 100)
                {
                    throw new ArgumentOutOfRangeException("Animals die younger than 100 years old");
                }
                this._age = value;
            }
        }

        public Genders Gender { get; private set; }

        public abstract void ProduceSound();
    }
}
