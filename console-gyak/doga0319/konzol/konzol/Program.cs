using System.Data;
using System.Globalization;
using System.Security.Claims;
using System.Xml.Linq;
using konzol.Enums;
using konzol.Model;

var file = File.ReadAllLines("star_trek_ships.csv");
List<Ship> ships = new List<Ship>();

foreach (var line in file.Skip(1))
{
    var parts = line.Split(',');
    ships.Add(
        new Ship
        {
            Name = parts[0],
            Class = int.Parse(parts[1]),
            RaceFaction = parts[2],
            Length = int.Parse(parts[3]),
            Crew = int.Parse(parts[4]),
            MaxWarp = double.Parse(parts[5], CultureInfo.GetCultureInfo("en-EN")),
            Armament = parts[6],
            ShieldType = parts[7],
            HullMaterial = parts[8],
            Role = Enum.Parse<ShipRole>(parts[9]),
        }
    );
}

//2. Hajók számának meghatározása (1 pont)
Console.WriteLine($"There are {ships.Count} ships in the database.");

//3. Legénység összlétszáma (1 pont)
Console.WriteLine($"The sum of every ship's crew is {ships.Sum(s => s.Crew)}.");

//4.Legnagyobb hajó keresése(1 pont)
Ship longestShip = ships.OrderByDescending(s => s.Length).First();
Console.WriteLine($"The longest ship is {longestShip.Name} ({longestShip.Length})");

//5.Hajók száma frakciónként(1 pont)
var factionCounts = ships
    .GroupBy(s => s.RaceFaction)
    .Select(g => new FactionCount { Faction = g.Key, Count = g.Count() });
foreach (var faction in factionCounts)
{
    Console.WriteLine(faction);
}

//6. Warp 9 feletti hajók listázása (1 pont)
List<Ship> fasterThenWarp9 = ships.Where(s => s.MaxWarp > 9.0).ToList();
foreach (var ship in fasterThenWarp9)
{
    Console.WriteLine($"{ship.Name} ({ship.MaxWarp})");
}

//7. Szerepkör (role) szerinti csoportosítás (1 pont)
var roleCounts = ships
    .GroupBy(s => s.Role)
    .Select(g => new RoleCount { Role = g.Key, Count = g.Count() });
foreach (var role in roleCounts)
{
    Console.WriteLine(role);
}

//8. Átlagos hajóhossz kiszámítása (1 pont)
Console.WriteLine($"The average lenght of ships is {ships.Average(x => x.Length)}");

//9.Legnagyobb legénységű hajó frakciónként (1 pont)
var largestCrewByFaction = ships
    .GroupBy(s => s.RaceFaction)
    .Select(g => new FactionShip
    {
        Faction = g.Key,
        _Ship = g.OrderByDescending(s => s.Crew).First(),
    });
foreach (var factionShip in largestCrewByFaction)
{
    Console.WriteLine(factionShip);
}

//10. Top 5 leggyorsabb hajó (1 pont)
var fiveFactestShips = ships.OrderByDescending(s => s.MaxWarp).Take(5);
foreach (var ship in fiveFactestShips)
{
    Console.WriteLine($"{ship.Name} - Warp {ship.MaxWarp}");
}
