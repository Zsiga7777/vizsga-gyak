using CommunityToolkit.Maui.Core.Extensions;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using MauiApp1.Interfaces;
using MauiApp1.Models;
using System.Collections.ObjectModel;

namespace MauiApp1.ViewModels;

[ObservableObject]
public partial class StatisticalViewModel(IRestaurantsService restaurantsService)
{
    public IAsyncRelayCommand OnAppearingCommand => new AsyncRelayCommand(OnAppearingAsync);
    public IRelayCommand TextChangedCommand => new RelayCommand(OnTextChanged);
    private List<Restaurant> Restaurants = new List<Restaurant>();

    [ObservableProperty]
    private int numberOfRestaurants;

    [ObservableProperty]
    private int numberOfOwners;

    [ObservableProperty]
    private ObservableCollection<OwnerPlusNumberOfRestaurants> ownerPlusNumberOfRestaurants = new ObservableCollection<OwnerPlusNumberOfRestaurants>();

    [ObservableProperty]
    private string searchedText = "";

    [ObservableProperty]
    private int numberOfRestaurantsThatHasTheSearcedText;

    [ObservableProperty]
    private string restaurantBiggerIncomThan300 = "";
    private async Task OnAppearingAsync()
    {
        Restaurants = restaurantsService.GetAll().ToList();
        NumberOfRestaurants = restaurantsService.Count();
        NumberOfOwners = Restaurants.GroupBy(x => x.OwnerName).Count();
        OwnerPlusNumberOfRestaurants = Restaurants.GroupBy(x => x.OwnerName).Select(y => new OwnerPlusNumberOfRestaurants
        {
            OwnerName = y.Key,
            NumberOfRestaurants = y.Count()
        }).ToObservableCollection();

        RestaurantBiggerIncomThan300 = Restaurants.Any(x => x.Income > 300) ? "Van ilyen étterem" : "Nincs ilyen étterem";
    }

    private void OnTextChanged()
    {
        if(SearchedText.Length == 0)
        {
            NumberOfRestaurantsThatHasTheSearcedText = Restaurants.Count();
        }
        NumberOfRestaurantsThatHasTheSearcedText = Restaurants.Count(x => x.Name.Contains(SearchedText));
    }
}
