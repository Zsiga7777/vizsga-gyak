
using MauiApp1.Models;

namespace MauiApp1.Services;

public class WorkerService : IWorkerService
{
    public List<WorkerModel> Workers = new List<WorkerModel>
    {
        new WorkerModel(1, "Kovács Anna", 12),
        new WorkerModel(2, "Szabó Péter", 7),
        new WorkerModel(3, "Tóth Eszter", 20),
        new WorkerModel(4, "Nagy László", 0),
        new WorkerModel(5, "Kiss Gábor", 33),
         new WorkerModel(6, "Kiss Pista", 45),
    };

    public List<WorkerModel> GetWorkers()
    {
        return Workers;
    }

    public List<WorkerModel> GetWorkersWithoutLeaveDay()
    {
        return Workers.Where(x => x.TakenDay == 45).ToList();
    }

    public WorkerModel GetWorkerById(int id)
    {
        return Workers.First(x => x.Id == id);
    }

    public string GetWorkerWithTheMostLeaveDays()
    {
        return Workers.MaxBy(x => 44 - x.TakenDay).Name;
    }

    public int GetUnTakenLeaveDaysCount()
    {
        return Workers.Sum(x => 44 - x.TakenDay);
    }

    public void DeleteById(int id)
    {
        Workers.Remove(Workers.First(x => x.Id == id));
    }

    public void PatchTakenDays(int id, int newlyTakenDays)
    {
        int workerIndex = Workers.FindIndex(x => x.Id == id);
        Workers[workerIndex].TakenDay += newlyTakenDays;
    }
}
