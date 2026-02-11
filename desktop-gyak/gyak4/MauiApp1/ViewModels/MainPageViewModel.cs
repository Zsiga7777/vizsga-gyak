using CommunityToolkit.Maui.Core.Extensions;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using MauiApp1.Interfaces;
using MauiApp1.Models;
using System.Collections.ObjectModel;

namespace MauiApp1.ViewModels;

[ObservableObject]
public partial class MainPageViewModel(IRestaurantsService restaurantsService)
{
    public IAsyncRelayCommand OnAppearingCommand => new AsyncRelayCommand(OnAppearingAsync);

    [ObservableProperty]
    private ObservableCollection<Restaurant> restaurants = new ObservableCollection<Restaurant>();
    private async Task OnAppearingAsync()
    {
        Restaurants = restaurantsService.GetAll().ToObservableCollection();
    }
}
