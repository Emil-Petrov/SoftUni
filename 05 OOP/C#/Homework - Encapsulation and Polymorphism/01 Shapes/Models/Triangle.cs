namespace Shapes.Models
{
    using System;
    class Triangle : BasicShape
    {

        private double _firstCathetus;
        private double _secondCathetus;

        public Triangle(double triangleBase, double firstCathetus, double secondCathetus, double height)
            : base(triangleBase, height)
        {
            this.FirstCathetus = firstCathetus;
            this.SecondCathetus = secondCathetus;
        }

        public double FirstCathetus
        {
            get { return this._firstCathetus; }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException("First Cathetus");
                }
                this._firstCathetus = value;
            }
        }
        public double SecondCathetus
        {
            get { return this._secondCathetus; }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException("Second Cathetus");
                }
                this._secondCathetus = value;
            }
        }

        public override double CalculateArea()
        {
            return (this.Width * this.Height) / 2;
        }
        public override double CalculatePerimeter()
        {
            return this.Width + this.FirstCathetus + this.SecondCathetus;
        }
    }
}
