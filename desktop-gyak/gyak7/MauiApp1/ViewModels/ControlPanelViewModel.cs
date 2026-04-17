using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using MauiApp1.Models;
using MauiApp1.Services;
using System.Collections.ObjectModel;

namespace MauiApp1.ViewModels;

[ObservableObject]
public partial class ControlPanelViewModel(IWorkerService workerService)
{
    public IAsyncRelayCommand OnAppearingCommand => new AsyncRelayCommand(OnAppearingAsync);

    [ObservableProperty]
    private string workerName ="";

    [ObservableProperty]
    private int untakenLeaveDaysCount = 0;
    private async Task OnAppearingAsync()
    {
        WorkerName = workerService.GetWorkerWithTheMostLeaveDays();
        UntakenLeaveDaysCount = workerService.GetUnTakenLeaveDaysCount();
    }
}
