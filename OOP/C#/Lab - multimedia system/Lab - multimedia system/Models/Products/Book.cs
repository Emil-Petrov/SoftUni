namespace Shop.Items
{
    using System;
    using System.Collections.Generic;

    class Book : Item
    {
        private string _author;

        /// <summary>
        /// Creates new book
        /// </summary>
        /// <param name="id">Id</param>
        /// <param name="title">Title</param>
        /// <param name="price">Price</param>
        /// <param name="author">Author</param>
        /// <param name="genres">Genres</param>
        public Book(string id, string title, decimal price, string author, List<string> genres) 
            : base(id,title, price, genres)
        {
            this.Author = author;
        }

        public Book(string id, string title, decimal price, string author, string genre)
            : this(id, title, price, author, new List<string> { genre })
        {
        }

        public string Author
        {
            get { return this._author; }
            private set
            {
                if (value == null || value.Length < 3)
                {
                    throw new ArgumentOutOfRangeException("Author name must be atleast 3 symbols long");
                }
                this._author = value;
            }
        }
    }
}
