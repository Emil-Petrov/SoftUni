using System;


class Component
{
    private string _name;
    private double _price;


    public string Name
    {
        get { return this._name; }
        set
        {
            if (value == null || value.Length < 3)
            {
                throw new ArgumentNullException("Name cannot be empty and has to be over 3 symbols in length");
            }
            this._name = value;
        }
    }

    public string[] Details { get; set; }

    public double Price
    {
        get { return this._price; }
        set
        {
            if (value < 0)
            {
                throw new ArgumentOutOfRangeException("Price must be higher or 0");
            }
            this._price = Math.Round(value,2);
        }
    }

    public Component(string name, double price)
    {
        this._name = name;
        this._price = price;
    }

    public Component(string name, double price, string[] details)
        : this(name,price)
    {
        this.Details = details;
    }
}