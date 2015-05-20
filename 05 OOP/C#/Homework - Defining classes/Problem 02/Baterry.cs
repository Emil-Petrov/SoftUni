using System;

class Baterry
{
    private string name;
    private int cells;
    private int power;
    private double life;

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
                throw new ArgumentNullException("value");
            }
            this.name = value;
        }
    }
    public int Cells
    {
        get
        {
            return this.cells;
        }
        set
        {
            if (value < 0)
            {
                throw new ArgumentOutOfRangeException("value");
            }
            this.cells = value;
        }
    }
    public int Power
    {
        get
        {
            return this.power;
        }
        set
        {
            if (value < 0)
            {
                throw new ArgumentOutOfRangeException("value");
            }
            this.power = value;
        }
    }
    public double Life
    {
        get
        {
            return this.life;
        }
        set
        {
            if (value < 0)
            {
                throw new ArgumentOutOfRangeException("value");
            }
            this.life = Math.Round(value, 2);
        }
    }

    public Baterry()
    {
        this.name = "empty";
    }
    public Baterry(string name, int cells = 0, int power = 0, double life = 0.0)
    {
        this.Name = name;
        this.Cells = cells;
        this.Power = power;
        this.Life = life;
    }
    public override string ToString()
    {
        string output = this.name;
        if (this.name == "empty")
        {
            return null;
        }
            //I think this else is not needed but i'll use it for clarity.
        else
        {
            if (this.cells > 0)
            {
                output += "; " + this.cells + "-cells";
            }
            if (this.power > 0)
            {
                output += "; " + this.power + " mAh";
            }
            if (this.life > 0)
            {
                output += "; " + this.life + " hours";
            }
            return output;
        }
    }
}