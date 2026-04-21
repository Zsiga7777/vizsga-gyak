namespace ConsoleApp1;

public class PlayerAboveAverage
{
    public string Name { get; set; }
    public int Heigth { get; set; }

    public override string ToString()
    {
        return $"{Name}: {Heigth} cm";
    }
}
