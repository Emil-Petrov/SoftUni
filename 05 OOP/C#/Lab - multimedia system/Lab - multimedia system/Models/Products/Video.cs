namespace Shop.Items
{
    using System.Collections.Generic;

    class Video : Item
    {
        public Video(string id, string title, decimal price, int minutesLength, List<string> genres) 
            : base(id, title, price, genres)
        {
            this.Length = minutesLength;
        }

        public Video(string id, string title, decimal price, int minutesLength, string genre)
            : this(id, title, price, minutesLength, new List<string> { genre })
        {
            
        }

        public int Length { get; private set; }
    }
}
