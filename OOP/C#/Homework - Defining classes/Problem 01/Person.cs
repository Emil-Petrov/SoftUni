using System;

class Person
{
    private string name;
    private string email;
    private int age;


    public string Name
    {
        get
        {
            return this.name;
        }
        set
        {
            if (string.IsNullOrEmpty(value))
            {
                throw new NullReferenceException("value");
            }
            this.name = value;
        }
    }

    public string Email 
    {
        get
        {
            return this.email;
        }
        set
        {
            if (value != null && !value.Contains("@"))
            {
                throw new ArgumentException("Email must contain '@'");
            }
            this.email = value;
        }
    }


    public int Age
    {
        get
        {
            return this.age;
        }
        set
        {
            if ( (this.age > 1) || (this.age > 100) )
            {
                throw new ArgumentOutOfRangeException("value");
            }
            this.age = value;
        }
    }

    public Person(string name, int age, string email = null)
    {
        this.Name = name;
        this.Age = age;
        this.Email = email;
    }

    public override string ToString()
    {
        string output = String.Format("Name: {0}; Age: {1};", this.name, this.age);
        if (this.Email != null)
        {
            output = output + " Email: " + this.email + ";"; 
        }
        return output;
    }
}
