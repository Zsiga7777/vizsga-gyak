namespace konzol.Model;

public class FactionShip
{
    public string Faction { get; set; }
    public Ship _Ship { get; set; }

    public override string ToString()
    {
        return $"{Faction}: {_Ship.Name} (Crew: {_Ship.Crew})";
    }
}
