using System;
using System.Runtime.Remoting.Channels;
using System.Text;

namespace _03_Student_Class
{
    class Student
    {
        private int _age;
        private string _name;

        /// <summary>
        /// Creates new student. Has no validation.
        /// </summary>
        /// <param name="name"></param>
        /// <param name="age"></param>
        public Student(string name, int age)
        {
            this.Name = name;
            this.Age = age;
        }

        public string Name
        {
            get { return this._name; }
            set
            {
                if (value != this._name)
                {
                    var args = new PropertyChangedEventArgs
                    {
                        PropertyName = "Name",
                        OldValue = this._name,
                        NewValue = value
                    };
                    OnPropertyChanged(args);
                }
                this._name = value;
            }
        }

        public int Age
        {
            get { return this._age; }
            set
            {
                if (value != this._age)
                {
                    var args = new PropertyChangedEventArgs
                    {
                        PropertyName = "Age",
                        OldValue = this._age.ToString(),
                        NewValue = value.ToString()
                    };
                    OnPropertyChanged(args);
                }
                this._age = value;
            }
        }

        private void OnPropertyChanged(PropertyChangedEventArgs e)
        {
            var handler = PropertyChanged;
            if (handler != null)
            {
                handler(this, e);
            }
        }

        public event EventHandler<PropertyChangedEventArgs> PropertyChanged;

        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.AppendFormat("Name: {0}; ", this.Name);
            sb.AppendFormat(this.Name == "Pikachu" ? "Level: {0}" : "Age: {0}", this.Age);
            return sb.ToString();
        }
    }

    public class PropertyChangedEventArgs : EventArgs
    {
        public string PropertyName { get; set; }
        public string OldValue { get; set; }
        public string NewValue { get; set; }
    }
}
