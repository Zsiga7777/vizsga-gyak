using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using MauiApp1.Models;
using MauiApp1.Services;
using MauiApp1.Views;

namespace MauiApp1.ViewModels;

[ObservableObject]
public partial class UpdateWorkerViewModel(IWorkerService workerService) : IQueryAttributable
{
    public IAsyncRelayCommand OnSaveCommand => new AsyncRelayCommand(OnSaveAsync);

    [ObservableProperty]
    private WorkerModel worker = new WorkerModel();

    [ObservableProperty]
    private string input = "";

    [ObservableProperty]
    private int maxNumberOfLEaveDays = 0;

    public void ApplyQueryAttributes(IDictionary<string, object> query)
    {
        int id =int.Parse( query["workerId"].ToString());
        Worker = workerService.GetWorkerById(id);
        MaxNumberOfLEaveDays = 45 - Worker.TakenDay;
    }

    private async Task OnSaveAsync()
    {
        Input = Input.Trim();
        if(Input.Length == 0)
        {
           await Shell.Current.DisplayAlertAsync("Hiba", "Adja meg, hogy hány nap szabadságot akar kivenni.", "ok");
            return;
        }
        int inputNumber;
        bool res = int.TryParse(Input, out inputNumber);

        if (!res)
        {
            await Shell.Current.DisplayAlertAsync("Hiba", "Nem számot adott meg.", "ok");
            return;
        }

        if (inputNumber <= 0) {
            await Shell.Current.DisplayAlertAsync("Hiba", "A megadott szám nbem lehet negatív vagy 0.", "ok");
            return;
        }

        if (inputNumber > MaxNumberOfLEaveDays)
        {
            await Shell.Current.DisplayAlertAsync("Hiba", "Túllépné a 45 napos keretet. Adjon meg kisebb számot.", "ok");
            return;
        }

        workerService.PatchTakenDays(Worker.Id, inputNumber);

        await Shell.Current.GoToAsync(ListWorkersView.Name);
    }
}
