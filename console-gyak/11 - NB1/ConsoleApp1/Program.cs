using ConsoleApp1;
using System.Text;

List<Player> players = GetPlayers();

Player oldestPlayer = players.Where(x => x.PostName != "kapu").MinBy(x => x.BirthDay);
Console.WriteLine($"Legidősebb játékos:{oldestPlayer.FirstName}, {oldestPlayer.LastName}, {oldestPlayer.BirthDay}\n");

int numberOfHungarions = players.Count(x => x.HungarianCitizen && !x.OutsiderCitizen);
int numberOfOutsiders = players.Count(x => !x.HungarianCitizen && x.OutsiderCitizen);
int numberOfDualAgents = players.Count(x => x.HungarianCitizen && x.OutsiderCitizen);
Console.WriteLine($"\nMagyarok:{numberOfHungarions}\nKüldölfiek:{numberOfOutsiders}\nKettős állampolgárok:{numberOfDualAgents}\n");

List<TeamValue> teamValues = players.GroupBy(x => x.ClubName).Select(y => new TeamValue
{
    Name = y.Key,
    Value = y.Sum(x => x.Value),
}).ToList();
Console.WriteLine("\n");
foreach (TeamValue item in teamValues)
{
    Console.WriteLine(item);
}
Console.WriteLine("\n");

List<TEamPost> teamPosts = players.GroupBy(x => x.ClubName).Select(y => new TEamPost
{
    Name = y.Key,
    PostNames = y.GroupBy(x => x.PostName).Where(x => x.Count() == 1).Select(y => y.Key).ToList()
}).ToList();
Console.WriteLine("\n");
foreach (TEamPost item in teamPosts)
{
    Console.WriteLine(item);
}
Console.WriteLine("\n");

double average = players.Average(x => x.Value);
List<Player> belowAverage = players.Where(x => x.Value <= average).ToList();

List<Player> youngs = players.Where(x => x.HungarianCitizen && (DateTime.Now - x.BirthDay).TotalDays > 6570 && (DateTime.Now - x.BirthDay).TotalDays < 7665).ToList();
Console.WriteLine("\n");
if(youngs.Count == 0)
{
    Console.WriteLine("Nincs ilyen játékos");
}
else
{
    foreach (Player item in youngs)
    {
        Console.WriteLine($"{item.FirstName} {item.LastName} {item.BirthDay} {item.ClubName}");
    }
}

List<TeamPlayers> hungarians = players.Where(x => x.HungarianCitizen && !x.OutsiderCitizen).GroupBy(x => x.ClubName).Select(y => new TeamPlayers
{
    Name = y.Key,
    Players = y.ToList(),
}).ToList();

File.WriteAllLines("../../../data/hazai.txt", hungarians.Select(x => x.ToString()));

List<TeamPlayers> foreigners = players.Where(x => !x.HungarianCitizen && x.OutsiderCitizen).GroupBy(x => x.ClubName).Select(y => new TeamPlayers
{
    Name = y.Key,
    Players = y.ToList(),
}).ToList();
File.WriteAllLines("../../../data/legios.txt", foreigners.Select(x => x.ToString()));
List<Player> GetPlayers()
{
    List<Player> players = new List<Player>();
    string[] rows = File.ReadAllLines("data/adatok.txt", Encoding.UTF8);
    string[] player;
    foreach (string row in rows)
    {
        player = row.Split("\t");
        if (player.Length == 9)
        {
            players.Add(new Player(player[0], int.Parse(player[1]), player[2], player[3], DateTime.Parse(player[4]), player[5] == "-1", player[6] == "-1", int.Parse(player[7]), player[8]));
        }
        else
        {
            players.Add(new Player(player[0], int.Parse(player[1]), null, player[2], DateTime.Parse(player[3]), player[4] == "-1", player[5] == "-1", int.Parse(player[6]), player[7]));
        }
    }
    return players;
} 