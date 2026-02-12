
using CommunityToolkit.Maui.Core.Extensions;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using MauiApp1.Interfaces;
using MauiApp1.Models;

namespace MauiApp1.ViewModels;

[ObservableObject]
public partial class IncomeViewModel(IRestaurantsService restaurantsService)
{
    public IAsyncRelayCommand OnAppearingCommand => new AsyncRelayCommand(OnAppearingAsync);

    private List<Restaurant> Restaurants = new List<Restaurant>();

    [ObservableProperty]
    private int sumOfIncome = 0;

    [ObservableProperty]
    private double averageIncome = 0;

    [ObservableProperty]
    private int maxIncome = 0;

    [ObservableProperty]
    private int minIncome = 0;

    [ObservableProperty]
    private int numberOfRestaurantsAboveAverage = 0;

    [ObservableProperty]
    private int differenceBetweenMinAndMax = 0;
    private async Task OnAppearingAsync()
    {
        Restaurants = restaurantsService.GetAll().ToList();
        SumOfIncome = Restaurants.Sum(x => x.Income);
        AverageIncome = Restaurants.Average(x => x.Income);
        MaxIncome = Restaurants.Max(x => x.Income);
        MinIncome = Restaurants.Min(x => x.Income);
        NumberOfRestaurantsAboveAverage = Restaurants.Count(x => x.Income > AverageIncome);
        DifferenceBetweenMinAndMax = MaxIncome - MinIncome;
    }
}
