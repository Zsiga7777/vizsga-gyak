namespace MauiApp1.Models;

public class WorkerModel
{
    public WorkerModel(int id, string name, int takenDay)
    {
        Id = id;
        Name = name;
        TakenDay = takenDay;
    }

    public WorkerModel() { }

    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int TakenDay { get; set; }
}
