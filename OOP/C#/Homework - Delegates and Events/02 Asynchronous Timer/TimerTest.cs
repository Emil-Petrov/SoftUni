using System;
using System.Threading;

namespace Asynchronous_Timer
{
    public class TimerTest
    {
        static void Main()
        {
            //So the thingy will start and say SOMETHING every 100 ticks for 500 ticks while the other thing ticks for like 1000 times.
            // p.s. I know it's ugly I'm just practicing lambda expressions.
            AsyncTimer.Execute(() => { Console.WriteLine("Something"); },
                100, 500);
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("{0} ticks passed", 100 * (i + 1));
                Thread.Sleep(100);
            }
        }
    }
}