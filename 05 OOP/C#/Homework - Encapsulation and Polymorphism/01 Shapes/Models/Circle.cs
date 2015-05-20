using System;

namespace Shapes.Models
{
    using Interface;
    using System;
    class Circle : IShape
    {
        private double _radius;

        public Circle(double radius)
        {
            this.Radius = radius;
        }

        public double Radius
        {
            get { return this._radius; }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException("Radius");
                }
                this._radius = value;
            }
        }

        public double CalculateArea()
        {
            return Math.PI * Math.Pow(this.Radius, 2);
        }
        public double CalculatePerimeter()
        {
            return this.Radius * 2 * Math.PI;
        }
    }
}
