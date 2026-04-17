using MauiApp1.Models;

namespace MauiApp1.Services;

public interface IWorkerService
{
    void DeleteById(int id);
    int GetUnTakenLeaveDaysCount();
    WorkerModel GetWorkerById(int id);
    List<WorkerModel> GetWorkers();
    List<WorkerModel> GetWorkersWithoutLeaveDay();
    string GetWorkerWithTheMostLeaveDays();
    void PatchTakenDays(int id, int newlyTakenDays);
}
