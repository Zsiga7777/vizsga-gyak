using CommunityToolkit.Maui.Core.Extensions;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using MauiApp1.Models;
using MauiApp1.Services;
using System.Collections.ObjectModel;

namespace MauiApp1.ViewModels;

[ObservableObject]
public partial class DeleteWorkersViewModel(IWorkerService workerService)
{
    public IAsyncRelayCommand OnAppearingCommand => new AsyncRelayCommand(OnAppearingAsync);

    public IRelayCommand OnDeleteCommand => new RelayCommand<int>((id) => Delete(id));

    [ObservableProperty]
    private ObservableCollection<WorkerModel> workers = new ObservableCollection<WorkerModel>();
    private async Task OnAppearingAsync()
    {
        Workers = workerService.GetWorkersWithoutLeaveDay().ToObservableCollection();
    }

    private void Delete(int id)
    {
        workerService.DeleteById(id);
        Workers = workerService.GetWorkersWithoutLeaveDay().ToObservableCollection();
    }
}
