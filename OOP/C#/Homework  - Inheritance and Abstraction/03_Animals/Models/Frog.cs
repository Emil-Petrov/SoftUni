﻿namespace Animals
{
    using System;

    public class Frog : Animal
    {
        public Frog(string name, int age, Genders gender)
            : base(name, age, gender)
        {

        }

        public override void ProduceSound()
        {
            Console.WriteLine("Kiss me. I'm a princess!");
        }
    }
}