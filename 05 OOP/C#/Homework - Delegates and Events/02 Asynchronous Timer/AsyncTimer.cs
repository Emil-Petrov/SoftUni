using System;
using System.Threading;

public class AsyncTimer
{
    /// <summary>
    /// Repeats action on a new thread for a set duration every interval
    /// </summary>
    /// <param name="action"></param>
    /// <param name="interval"></param>
    /// <param name="ticks"></param>
    public static void Execute(Action action, int interval, int ticks)
    {
        Thread backgroundThread = new Thread(() =>
        {
            int repetitions = ticks / interval;

            for (int i = 0; i < repetitions; i++)
            {
                action();
                Thread.Sleep(interval);
            }
        });
        backgroundThread.Start();
    }
}
