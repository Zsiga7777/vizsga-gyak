using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    public class Contry
    {
        public Contry(string name, DateOnly joinDate)
        {
            Name = name;
            JoinDate = joinDate;
        }

        public string Name { get; set; }
        public DateOnly JoinDate {  get; set; }
    }
}
