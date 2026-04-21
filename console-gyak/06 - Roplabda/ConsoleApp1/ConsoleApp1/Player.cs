namespace ConsoleApp1;

public class Player
{


    public string Name { get; set; }
    public  string Post {  get; set; }
    public int Height { get; set; }
    public string Nationality { get; set; }
    public string Team { get; set; }
    public string Country { get; set; }

    public Player(string name, string post, int height, string nationality, string team, string country)
    {
        Name = name;
        Post = post;
        Height = height;
        Nationality = nationality;
        Team = team;
        Country = country;
    }

    public override string ToString()
    {
        return $"{Name}, {Height} cm, {Post}, {Nationality}, {Team}, {Country}";
    }

    public string ToWriteString()
    {
        return $"{Name}\t{Height}\t{Post}\t{Nationality}\t{Team}\t{Country}";
    }
}
