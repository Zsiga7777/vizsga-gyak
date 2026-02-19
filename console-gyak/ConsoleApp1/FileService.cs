namespace ConsoleApp1;

public class FileService
{
    public List<Szo> ReadFile()
    {
        string[] lines = File.ReadAllLines("data/szo10000.txt");
        List<Szo> res = new List<Szo>();
        Szo szo;
        string[] data;
        foreach (string line in lines.Skip(1)){
            data = line.Split("\t");
            szo = new Szo()
            {
                Azon =int.Parse( data[0]),
                Szoto = data[1],
                Szofaj = data[2],
                Gyakori =int.Parse( data[3]),
            };

            res.Add(szo);
        }
        return res;
    }

    public void WriteFile(string filename, List<string> data)
    {
        File.WriteAllLines(filename, data);
    }
}
