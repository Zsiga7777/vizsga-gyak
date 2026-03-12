using System;
using System.Collections.Generic;
using System.Text;

namespace MauiApp1.models;

public class MeresModel
{
    public int Id {  get; set; }
        public string Day { get; set; }
        public string City { get; set; }
        public double TemperatureCelsius { get; set; }
        public double ChangeFromPreviousDay { get; set; }

    public MeresModel()
    {
        
    }
    public MeresModel(int id, string day, string city, double temperatureCelsius, double changeFromPreviousDay)
    {
        Id = id;
        Day = day;
        City = city;
        TemperatureCelsius = temperatureCelsius;
        ChangeFromPreviousDay = changeFromPreviousDay;
    }
}
