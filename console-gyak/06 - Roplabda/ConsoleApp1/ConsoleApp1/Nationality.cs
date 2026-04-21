namespace ConsoleApp1;

public class Nationality
{
    public string Name { get; set; }
    public int NumberOfPlayers { get; set; }

    public override string ToString()
    {
        return $"{Name}: {NumberOfPlayers}";
    }
}
