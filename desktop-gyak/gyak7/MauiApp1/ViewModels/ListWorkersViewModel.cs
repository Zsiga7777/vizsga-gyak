
using CommunityToolkit.Maui.Core.Extensions;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using MauiApp1.Models;
using MauiApp1.Services;
using MauiApp1.Views;
using System.Collections.ObjectModel;

namespace MauiApp1.ViewModels;

[ObservableObject]
public partial class ListWorkersViewModel(IWorkerService workerService)
{
    public IAsyncRelayCommand OnAppearingCommand => new AsyncRelayCommand(OnAppearingAsync);

    public IAsyncRelayCommand OnPatchCommand => new AsyncRelayCommand<int>((id) => OnPatchAsync(id));

    [ObservableProperty]
    private ObservableCollection<WorkerModel> workers = new ObservableCollection<WorkerModel>();
    private async Task OnAppearingAsync()
    {
        Workers = workerService.GetWorkers().ToObservableCollection();
    }

    private async Task OnPatchAsync(int id)
    {
        ShellNavigationQueryParameters param = new ShellNavigationQueryParameters()
        {
            { "workerId", id }
        };
        await Shell.Current.GoToAsync(UpdateWorkerView.Name, param);
    }
}
