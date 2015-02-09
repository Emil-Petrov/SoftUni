namespace TheSlum
{
    using Interfaces;

    class Injection : Bonus
    {
        public Injection(string id)
            : base(id, 300, 0, 0)
        {
            this.Timeout = 3;
            this.Countdown = 3;
            this.HasTimedOut = false;
        }
    }
}
