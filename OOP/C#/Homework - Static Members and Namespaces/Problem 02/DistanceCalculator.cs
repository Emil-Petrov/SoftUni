namespace Problem2
{
    using System;
    using Problem1;
    class DistanceCalculator
    {
        public static double CalculateDistance(Point3D a, Point3D b)
        {
            double distance = Math.Sqrt(
               ((b.X - a.X) * (b.X - a.X)) +
               ((b.Y - a.Y) * (b.Y - a.Y)) +
               ((b.Z - a.Z) * (b.Z - a.Z)));
            return distance;
        }
    }
}
