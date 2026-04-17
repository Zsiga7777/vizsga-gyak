using konzol.Enums;

namespace konzol.Model;

public class Ship
{
    public string Name { get; set; }
    public int Class { get; set; }
    public string RaceFaction { get; set; }
    public int Length { get; set; }
    public int Crew { get; set; }
    public double MaxWarp { get; set; }
    public string Armament { get; set; }
    public string ShieldType { get; set; }
    public string HullMaterial { get; set; }
    public ShipRole Role { get; set; }

    public override string ToString()
    {
        return $"{Name} (Class {Class}) - {RaceFaction}, Length: {Length}m, Crew: {Crew}, Max Warp: {MaxWarp}, Armament: {Armament}, Shield: {ShieldType}, Hull: {HullMaterial}, Role: {Role}";
    }
}
