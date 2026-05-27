using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    public class CountryByRacerNumber
    {
        public string Country { get; set; }
        public int Number { get; set; }

        public override string ToString()
        {
            return $"\t{Country} - {Number} fő";
        }
    }
}
