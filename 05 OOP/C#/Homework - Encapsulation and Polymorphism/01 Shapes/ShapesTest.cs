using System;
using System.Collections.Generic;
using Shapes;
using Shapes.Interface;
using Shapes.Models;

public class ShapesTest
{
    static void Main(string[] args)
    {
        var rect = new Rectangle(2, 4);
        var circle = new Circle(5);

        //Not sure if this is even possible... Just let it happen... For science!
        var triangle = new Triangle(5, 2, 3, 6);

        //Using interface for the list type since circle doesn't inherit shape
        List<IShape> shapes = new List<IShape>
        {
            rect,
            circle,
            triangle
        };

        foreach (var shape in shapes)
        {
            double shapeArea = Math.Round(shape.CalculateArea(), 2);
            double shapePerimeter = Math.Round(shape.CalculatePerimeter(), 2);
            string shapeName = shape.GetType().Name;
            Console.WriteLine("{0}'s area is {1}, perimeter is {2}; ", shapeName, shapeArea, shapePerimeter);
        }
    }
}
