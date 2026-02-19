namespace ConsoleApp1;

public class Szo
{
    public int Azon {  get; set; }
    public string Szoto { get; set; }
    public string Szofaj { get; set; }
    public int Gyakori { get; set; }

    public override string ToString()
    {
        return $"{Azon},{Szoto},{Szofaj},{Gyakori}";
    }
}
