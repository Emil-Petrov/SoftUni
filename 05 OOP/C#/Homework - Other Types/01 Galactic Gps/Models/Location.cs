using System.Globalization;
using System.Text;

namespace GalacticGps
{
    struct Location
    {
        public Location(double latitude, double longitude, Planet planet) 
            : this()
        {
            this.Latitude = latitude;
            this.Longitude = longitude;
            this.Planet = planet;
        }

        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public Planet Planet { get; set; }

        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.AppendFormat("{0}, {1} - {2}", this.Latitude, this.Longitude, this.Planet);
            return sb.ToString();
        }
    }
}
