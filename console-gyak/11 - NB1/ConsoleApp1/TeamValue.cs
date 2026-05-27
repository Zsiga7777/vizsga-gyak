using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    public class TeamValue
    {
        public string Name { get; set; }
        public int Value { get; set; }

        public override string ToString()
        {
            return $"{Name}: {Value} thousand eur";
        }
    }

}
