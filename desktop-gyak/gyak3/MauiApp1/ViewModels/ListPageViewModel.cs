using CommunityToolkit.Maui.Core.Extensions;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using MauiApp1.Interfaces;
using MauiApp1.Models;
using System.Collections.ObjectModel;

namespace MauiApp1.ViewModels;

[ObservableObject]
public partial class ListPageViewModel(IRestaurantService restaurantService)
{
    public IAsyncRelayCommand OnAppearing => new AsyncRelayCommand(OnAppearingAsync);

    public IRelayCommand OnSearch => new RelayCommand(Search);
    public IRelayCommand OnOwnerSelected => new RelayCommand(SearchByOwner);

    [ObservableProperty]
    private ObservableCollection<Restaurant> restaurants = new ObservableCollection<Restaurant>();

    [ObservableProperty]
    private ObservableCollection<Restaurant> searchedRestaurants = new ObservableCollection<Restaurant>();

    [ObservableProperty]
    private ObservableCollection<string> owners = new ObservableCollection<string>();

    [ObservableProperty]
    private string searchText = "";

    [ObservableProperty]
    private string selectedOwner = "";

    [ObservableProperty]
    private int numberOfFinds;
    private async Task OnAppearingAsync()
    {
        Restaurants = restaurantService.GetAllRestaurants().ToObservableCollection();
        SearchedRestaurants = Restaurants;
        NumberOfFinds = SearchedRestaurants.Count;
        Owners = Restaurants.Select(x => x.OwnerName).Distinct().ToObservableCollection();
        Owners.Add("Mindenki");
    }

    private void Search()
    {
        SearchedRestaurants = Restaurants.Where(x => x.Name.Contains(SearchText)).ToObservableCollection();
        NumberOfFinds = SearchedRestaurants.Count;
    }

    private void SearchByOwner()
    {
        if(SelectedOwner == "Mindenki")
        {
            SearchedRestaurants = Restaurants;
            Search();
            return;
        }
        SearchedRestaurants = Restaurants.Where(x => x.OwnerName == SelectedOwner).ToObservableCollection();
        NumberOfFinds = SearchedRestaurants.Count;
    }
}
