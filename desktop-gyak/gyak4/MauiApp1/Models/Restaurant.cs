
namespace MauiApp1.Models;

public class Restaurant
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string OwnerName { get; set; }
    public int Income { get; set; }
    public Restaurant(int id, string name, string ownerName, int income)
    {
        Id = id;
        Name = name;
        OwnerName = ownerName;
        Income = income;
    }
    public override string ToString() => $"{Id} {Name} {OwnerName} {Income}";
}
