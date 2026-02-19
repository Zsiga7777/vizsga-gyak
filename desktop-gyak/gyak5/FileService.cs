using gyak5.Models;

namespace gyak5;

public class FileService
{
    public List<Szo> ReadFile()
    {
        string[] lines = File.ReadAllLines("szo10000.txt");
        List<Szo> res = new List<Szo>();
        Szo szo;
        string[] data;
        foreach (string line in lines.Skip(1))
        {
            data = line.Split("\t");
            szo = new Szo(int.Parse(data[0]), data[1], data[2], int.Parse(data[3]));

            res.Add(szo);
        }
        return res;
    }
}
