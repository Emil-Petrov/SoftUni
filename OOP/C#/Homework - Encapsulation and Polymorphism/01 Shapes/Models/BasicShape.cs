namespace Shapes.Models
{
    using Interface;
    using System;

    abstract class BasicShape : IShape
    {
        private double _width;
        private double _height;

        protected BasicShape(double width, double height)
        {
            this.Width = width;
            this.Height = height;
        }

        public double Width
        {
            get { return this._width; }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException("Width cannot be negative");
                }
                this._width = value;
            }
        }
        public double Height
        {
            get { return this._height; }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException("Height cannot be negative");
                }
                this._height = value;
            }
        }

        public abstract double CalculateArea();
        public abstract double CalculatePerimeter();
    }
}
