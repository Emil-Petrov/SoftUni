namespace Shop.Exceptions
{
    internal class InsufficentSuppliesException : System.Exception
    {
        public InsufficentSuppliesException() { }
        public InsufficentSuppliesException(string message)
            : base(message) { }
    }
}