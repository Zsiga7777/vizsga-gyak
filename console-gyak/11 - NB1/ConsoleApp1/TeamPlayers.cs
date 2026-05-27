namespace ConsoleApp1
{
    public class TeamPlayers
    {
        public string Name { get; set; }
        public List<Player> Players { get; set; }

        public override string ToString()
        {
            string res = $"{Name}: \n";
            foreach (Player p in Players)
            {
                res += $"\t-{p.FirstName} {p.LastName} {p.PostName} {p.Value} eur\n";
            }
            return res;
        }
    }
}
