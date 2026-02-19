namespace ConsoleApp1;

public class Szofajok
{
    public string Szofaj {  get; set; }
    public List<string> Szavak { get; set; }

    public override string ToString()
    {
        string res = $"{Szofaj},";
        foreach (string s in Szavak) {
            res += $"{s},";
        }
        return res.Remove(res.Length-1) ;
    }
}
