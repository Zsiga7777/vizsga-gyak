using MauiApp1.Interfaces;
using MauiApp1.Models;

namespace MauiApp1.Services;

public class FileService : IFileService
{
    public List<Restaurant> ReadFile()
    {
        string path = "Resources/raw/TestData.csv";
        List<Restaurant> result = new List<Restaurant>();
        Restaurant restaurant = null;

        string[] res = File.ReadAllLines(path);
        
        string[] data;
        foreach(string line in res.Skip(1))
        {
            data = line.Split(',');
            restaurant = new Restaurant(uint.Parse(data[0]), data[1], data[2]);
            result.Add(restaurant);
        }

        return result;
    }
}
