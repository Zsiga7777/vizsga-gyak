using MauiApp1.Interfaces;
using MauiApp1.Models;

namespace MauiApp1.Services;

public class RestaurantService(IFileService fileService) : IRestaurantService
{
    private List<Restaurant> _restaurants = new List<Restaurant>();

    public List<Restaurant> GetAllRestaurants()
    {
        if(_restaurants.Count() == 0)
        {
            _restaurants = fileService.ReadFile();
        }
        return _restaurants;
    }
}
