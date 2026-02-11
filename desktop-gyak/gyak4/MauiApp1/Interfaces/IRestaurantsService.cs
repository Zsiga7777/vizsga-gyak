using MauiApp1.Models;

namespace MauiApp1.Interfaces;

public interface IRestaurantsService
{
    int Count();
    IReadOnlyList<Restaurant> GetAll();
    int GetTotalIncome();
}
