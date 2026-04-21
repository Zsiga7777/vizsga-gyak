using ConsoleApp1;
List<Player> players = ReadAllPlayers();
foreach (Player player in players)
{
    Console.WriteLine(player.ToString());
}

List<Player> utok = players.Where(x => x.Post.ToLower() == "ütõ").ToList();
WriteToFile("utok.txt", utok);

List<Team> csapat = players.GroupBy(x => x.Team).Select(y => new Team { Name = y.Key, PlayerNames = y.Select(x => x.Name).ToList()}).ToList();
WriteToFileWithToString("csapattagok.txt", csapat);

List<Player> magaslatok = players.OrderBy(x => x.Height).ToList();
WriteToFile("magaslatok.txt", magaslatok);

List<Nationality> nemzetek = players.GroupBy(x => x.Nationality).Select(y => new Nationality { Name = y.Key, NumberOfPlayers = y.Count() }).ToList();
WriteToFileWithToString("nemzetisegek.txt", nemzetek);

double atlagmag = players.Average(x => x.Height);
List<PlayerAboveAverage> magasak = players.Where(x => (double)x.Height  > atlagmag).Select(x => new PlayerAboveAverage { Heigth = x.Height, Name = x.Name}).ToList();
WriteToFileWithToString("atlagnalmagasabbak.txt", magasak);

List<int> posztmag = players.GroupBy(x => x.Post).Select(x => x.Sum(x => x.Height)).Order().ToList();
foreach (int mag in posztmag)
{
    Console.WriteLine(mag);
}

List<SmallPlayer> smallPlayers = players.Where(x => x.Height < atlagmag).Select(y => new SmallPlayer
{
    Heigth = y.Height,
    Name = y.Name,
    LessThan = atlagmag - y.Height
}).ToList();
WriteToFileWithToString("alacsonyak.txt", smallPlayers);

List<Player> ReadAllPlayers()
{
    string[] rows = File.ReadAllLines("data/adatok.txt", System.Text.Encoding.UTF7);
    List<Player> players = new List<Player>();

    foreach (string row in rows.Skip(1))
    {
        string[] cols = row.Split('\t');
        players.Add(new Player(cols[0], cols[2], int.Parse(cols[1]), cols[3], cols[4], cols[5]));
    }
    return players;
}

void WriteToFile(string fileName, List<Player> players)
{
    File.WriteAllLines($"../../../data/{fileName}", players.Select(x => x.ToWriteString()).ToArray());
}

void WriteToFileWithToString<T>(string fileName, List<T> list)
{
    File.WriteAllLines($"../../../data/{fileName}", list.Select(x => x.ToString()).ToArray());
}