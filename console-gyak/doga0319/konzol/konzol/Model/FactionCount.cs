namespace konzol.Model;

public class FactionCount
{
    public string Faction { get; set; }
    public int Count { get; set; }

    public override string ToString()
    {
        return $"{Faction}: {Count}";
    }
}
