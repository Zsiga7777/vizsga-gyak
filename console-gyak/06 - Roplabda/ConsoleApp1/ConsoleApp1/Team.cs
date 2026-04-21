namespace ConsoleApp1;

public class Team
{
    public string Name { get; set; }
    public List<string> PlayerNames { get; set; }

    public override string ToString()
    {
        string final = $"{Name}: ";
        foreach (string name in PlayerNames)
        {
            final += $"{name},";
        }
        final.Remove(final.Length - 1);
        return final ;
    }
}
