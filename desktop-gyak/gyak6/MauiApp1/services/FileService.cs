using MauiApp1.iterfaces;
using MauiApp1.models;

namespace MauiApp1.services;

public class FileService : IFileService
{
    public List<MeresModel> GetMeresek()
    {
        string[] file = File.ReadAllLines("./data.csv");

        List<MeresModel> res = new List<MeresModel>();

        foreach (string line in file.Skip(1))
        {
            string[] splittedLine = line.Split(",");
            res.Add(new MeresModel(int.Parse(splittedLine[0]), splittedLine[1], splittedLine[2], double.Parse(splittedLine[3]), double.Parse(splittedLine[4])));
        }

        return res;
    }
}
