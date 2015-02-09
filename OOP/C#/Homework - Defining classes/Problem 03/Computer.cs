using System;
using System.Collections.Generic;

class Computer
{
    private string _name;
    private List<Component> _components; 
    public string Name
    {
        get
        {
            return this._name;
        }
        set
        {
            if (string.IsNullOrEmpty(value))
            {
                throw new ArgumentNullException("Name cannot be empty");
            }
            this._name = value;
        }
    }
    public List<Component> Components
    {
        get { return this._components; }
        set
        {
            if (value == null)
            {
                throw new ArgumentNullException("Component");
            }
            this._components = value;
        }
    } 
    public double Price
    {
        get
        {
            double total = 0;
            foreach (var component in this._components)
            {
                total += component.Price;
            }
            return total;
        }
    }


    public Computer(string name, List<Component> components)
    {
        this.Name = name;
        this.Components = components;
    }

    /// <summary>
    ///     Use computer.ShowSpecs(); to print the computer name, name and price of all components and total price.
    /// </summary>
    public void ShowSpecs()
    {

        string output = string.Format("Name: {0};",this._name);
        foreach (var component in this._components)
        {
            output += string.Format("\nComponent: {0}; Price: {1:C};",component.Name, component.Price);
        }
        output += string.Format("\nTotal Price: {0:C};",this.Price);
        Console.WriteLine(output);
    }

    public override string ToString()
    {
        return string.Format("Name: {0}; Total Price: {1};",this._name, this.Price);
    }
}