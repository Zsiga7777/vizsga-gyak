using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    public class YearCountryCount
    {
        public YearCountryCount(int year, int countryCount)
        {
            Year = year;
            CountryCount = countryCount;
        }

        public int Year {  get; set; }
        public int CountryCount { get; set; }

        public override string ToString()
        {
            return $"\t{Year} - {CountryCount} ország";
        }
    }
}
