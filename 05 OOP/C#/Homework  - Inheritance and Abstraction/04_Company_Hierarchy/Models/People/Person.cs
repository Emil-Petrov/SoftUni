
namespace Company_Hierarchy.Models.People
{
    using System;
    using Interface.People;

    public abstract class Person : IPerson
    {
        private string _firstName;
        private string _lastName;

        protected Person(string id, string firstName, string lastName)
        {
            this.Id = id;
            this.FirstName = firstName;
            this.LastName = lastName;
        }

        public string Id { get; private set; }
        public string FirstName
        {
            get { return this._firstName; }
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("Name cannot be empty");
                }
                this._firstName = value;
            }
        }
        public string LastName
        {
            get { return this._lastName; }
            private set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("Name cannot be empty");
                }
                this._lastName = value;
            }
        }

        public override string ToString()
        {
            return string.Format("Position: {0}; Name: {1} {2}; Id: {3}",
                this.GetType().Name, this.FirstName,
                this.LastName, this.Id);
        }
    }
}
