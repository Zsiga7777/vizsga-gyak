namespace MauiApp1.Models;

public class Restaurant
{
    public uint Id { get; set; }
    public string Name { get; set; }
    public string OwnerName { get; set; }

    public Restaurant(uint id, string name, string ownerName)
    {
        Id = id;
        Name = name;
        OwnerName = ownerName;
    }
}
