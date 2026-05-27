using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    public class TEamPost
    {
        public string Name { get; set; }
        public List<string> PostNames { get; set; }

        public override string ToString()
        {
            string res = $"{Name}: \n";
            foreach (string s in PostNames) 
            {
                res += $"\t-{s}\n";
            }
            return res;
        }

    }
}
