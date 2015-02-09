using System;

namespace Problem1
{
    class Point3D
    {
        private static readonly Point3D StartingPoint3D = new Point3D(0, 0, 0);

        public double X { get; set; }
        public double Y { get; set; }
        public double Z { get; set; }

        public static Point3D StartingPoint
        {
            get { return StartingPoint3D; }
        }

        public Point3D(int x, int y, int z)
        {
            this.X = x;
            this.Y = y;
            this.Z = z;
        }
        public override string ToString()
        {
            return string.Format("X: {0}; Y: {1}; Z: {2}", this.X, this.Y, this.Z);
        }
    }
}
