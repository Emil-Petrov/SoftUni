namespace FractionCalculator
{
    using System;

    struct Fraction
    {
        private long _denominator;
        public Fraction(long numerator, long denominator)
            : this()
        {
            this.Numerator = numerator;
            this.Denominator = denominator;
        }

        public long Numerator { get; set; }
        public long Denominator
        {
            get { return this._denominator; }
            set
            {
                if (value == 0)
                {
                    throw new DivideByZeroException("Cannot divide by zero");
                }
                this._denominator = value;
            }
        }

        public static Fraction operator +(Fraction f1, Fraction f2)
        {
            long commonDenominator = f1.Denominator * f2.Denominator;

            long f1Numerator = f1.Numerator * f2.Denominator;
            long f2Numerator = f2.Numerator * f1.Denominator;
            long newNumerator = f1Numerator + f2Numerator;

            Fraction newFraction = new Fraction(newNumerator, commonDenominator);

            return newFraction;
        }

        public static Fraction operator -(Fraction f1, Fraction f2)
        {
            long commonDenominator = f1.Denominator * f2.Denominator;

            long f1Numerator = f1.Numerator * f2.Denominator;
            long f2Numerator = f2.Numerator * f1.Denominator;
            long newNumerator = f1Numerator - f2Numerator;

            Fraction newFraction = new Fraction(newNumerator, commonDenominator);

            return newFraction;
        }

        public override string ToString()
        {
            decimal num = (decimal) this.Numerator / (decimal) this.Denominator;
            return num.ToString();
        }
    }
}
