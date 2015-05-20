using System;

class Laptop
{
    private string _model;
    private string _manufacturer;
    private string _processor;
    private int _ram;
    private string _gpu;
    private int _hdd;
    private string _screen;
    // Could have made this of type decimal.
    private double _price;

    public string Model
    {
        get
        {
            return this._model;
        }
        set
        {
            if (string.IsNullOrEmpty(value))
            {
                throw new ArgumentNullException("value");
            }
            this._model = value;
        }
    }
    public string Manufacturer
    {
        get
        {
            return this._manufacturer;
        }
        set
        {
            if (value != null && value.Length == 0)
            {
                throw new ArgumentNullException("value");
            }
            this._manufacturer = value;
        }
    }
    public string Processor
    {
        get
        {
            return this._processor;
        }
        set
        {
            if (value != null && value.Length == 0)
            {
                throw new ArgumentNullException("value");
            }
            this._processor = value;
        }
    }
    public int Ram
    {
        get
        {
            return this._ram;
        }
        set
        {
            if (value < 0)
            {
                throw new ArgumentOutOfRangeException("value");
            }
            this._ram = value;
        }
    }
    public string Gpu { 
        get
        {
            return this._gpu;
        }
        set 
        {
            if (value != null && value.Length == 0)
            {
                throw new ArgumentOutOfRangeException("value");
            }
            this._gpu = value;
        }
    }
    public int Hdd
    {
        get
        {
            return this._hdd;
        }
        set
        {
            if (value < 0)
            {
                throw new ArgumentOutOfRangeException("value");
            }
            this._hdd = value;
        }
    }
    public string Screen
    {
        get
        {
            return this._screen;
        }
        set
        {
            if (value != null && value.Length == 0)
            {
                throw new ArgumentOutOfRangeException("value");
            }
            this._screen = value;
        }
    }
    public Baterry Battery { get; set; }

    public double Price
    {
        get
        {
            return this._price;
        }
        set
        {
            if (value < 0)
            {
                throw new ArgumentOutOfRangeException("value");
            }
            this._price = value;
        }
    }

    public Laptop(string model, 
        double price, 
        string manufacturer = null, 
        string processor = null, 
        int ram = 0, 
        string gpu = null, 
        int hdd = 0,
        string screen = null,
        Baterry battery = null)
    {
        this.Model = model;
        this.Price = price;
        this.Manufacturer = manufacturer;
        this.Processor = processor;
        this.Ram = ram;
        this.Gpu = gpu;
        this.Hdd = hdd;
        this.Screen = screen;
        this.Battery = battery;
    }

    public override string ToString()
    {
        string output = string.Format("Model: {0};\nPrice: {1};", this._model, this._price);
        if (this._manufacturer != null)
        {
            output += AddProp("Manufacturer", this._manufacturer);
        }
        if (this._processor != null)
        {
            output += AddProp("Processor", this._processor);
        }
        if (this._ram > 0)
        {
            output += AddProp("Ram", this._ram.ToString(),"GB");
        }
        if (this._gpu != null)
        {
            output += AddProp("Gpu", this._gpu);
        }
        if (this._hdd > 0)
        {
            output += AddProp("Hdd", this._hdd.ToString(), "GB");
        }
        if (this._screen != null)
        {
            output += AddProp("Screen", this._screen);
        }
        if (this.Battery != null)
        {
            output += AddProp("Battery", this.Battery.ToString());

            if (this.Battery.Life > 0)
            {
                output += AddProp("Battery life", this.Battery.Life.ToString());
            }
        }
        return output;

    }
    private static string AddProp(string prefix, string value, string postfix = null)
    {
        return string.Format("\n{0}: {1}{2};",prefix,value,postfix);
    }
}
