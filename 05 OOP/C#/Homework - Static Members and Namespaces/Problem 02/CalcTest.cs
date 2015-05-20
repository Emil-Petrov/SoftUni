namespace Problem2
{
    using System;
    using Problem1;
    class CalcTest
    {
        static void Main()
        {
            Point3D a = new Point3D(1, 2, 3);
            Point3D b = new Point3D(3, 2, 1);
            Console.WriteLine(DistanceCalculator.CalculateDistance(a, b));
        } 
    }
}
