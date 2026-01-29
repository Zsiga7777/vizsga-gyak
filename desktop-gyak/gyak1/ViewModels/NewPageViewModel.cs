using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using System.Collections.ObjectModel;

namespace gyak1.ViewModels;

[ObservableObject]
public partial class NewPageViewModel
{
    public IAsyncRelayCommand OnAppearingCommand => new AsyncRelayCommand(OnAppearingAsync);

    private async Task OnAppearingAsync()
    { }

    [ObservableProperty]
    ObservableCollection<string> list = new ObservableCollection<string>() { "asd", "basd", "sas", "kecske"}; 
}
