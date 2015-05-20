namespace Shop.Reports
{
    using Items;
    using System.Text;

    abstract class Report
    {
        public abstract string GenerateReport();

        /// <summary>
        /// Generate report based on item type.
        /// </summary>
        /// <param name="item">What am i supposed to write here again?</param>
        /// <returns>Returns StringBuilder format for use in abstract GenerateReport(); method</returns>
        protected StringBuilder GenerateDefaultReport(Item item)
        {
            string itemType = item.GetType().Name;
            var sb = new StringBuilder();
            sb.AppendFormat("{0} {1}",itemType, item.Id);
            sb.AppendFormat("\nTitle {0}",item.Title);
            sb.AppendFormat("\nPrice {0}",item.Price);
            sb.AppendFormat("\nGenres {0}",item.Genres[0]); //TODO fix display of more than 1 genre;
            switch (itemType.ToLower())
            {
                case "book":
                    sb.AppendFormat("\nAuthor: {0}", ((Book) item).Author);
                    break;
                case "game":
                    sb.AppendFormat("\nAge restriction: {0}", ((Game) item).AgeRestriction);
                    break;
                case "video":
                    sb.AppendFormat("\nLength: {0}", ((Video) item).Length);
                    break;
                default:
                    break;
            }
            return sb;
        }
    }
}
