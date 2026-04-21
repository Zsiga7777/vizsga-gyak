namespace ConsoleApp1;

public class SmallPlayer
{
    public string Name { get; set; }
    public int Heigth { get; set; }
    public double LessThan { get; set; }


    public override string ToString()
    {
        return $"{Name}, {Heigth}cm, {LessThan : f.2} cm-el alacsonyabb.";
    }
}
