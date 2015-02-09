using System;

namespace TheSlum
{
    using TheSlum.GameEngine;

    public class Program
    {
        static void Main()
        {
            EngineExtended engine = new EngineExtended();
            engine.Run();

            //  create mage Nakov 3 4 Red
            //  add Nakov axe Axe 
            //  add Nakov pill IronPill
            //  add Nakov injection AnalInjection
            //  create warrior Vlado 5 4 Blue
            //  add Vlado shield HeavyShield
            //  create healer Alex 7 8 Red
            //  create warrior BateArni 2 3 Blue
            //  add BateArni axe TurboMegaAxe
            //  add BateArni shield TurtleShield

            // Hold alt drag and copy the above. Right click to paste in console.
            // p.s. For some reason Nakov has an extra axe of damage less hp than the expected output no idea why.

        }
    }
}
