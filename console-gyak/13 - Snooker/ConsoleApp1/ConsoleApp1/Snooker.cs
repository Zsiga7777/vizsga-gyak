using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    public class Snooker
    {
        public Snooker(int position, string name, string country, int price)
        {
            Position = position;
            Name = name;
            Country = country;
            Price = price;
        }

        public int Position { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public int Price { get; set; }
    }
}
