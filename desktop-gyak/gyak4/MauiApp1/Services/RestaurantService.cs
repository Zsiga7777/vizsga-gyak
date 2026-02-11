using MauiApp1.Interfaces;
using MauiApp1.Models;

namespace MauiApp1.Services;

public class RestaurantService : IRestaurantsService
{
    private List<Restaurant> _items = new()
        {
            new Restaurant(1, "Tisza Bistro",          "Kiss Gábor",   18000),
            new Restaurant(2, "Paprika Csárda",        "Nagy Anna",   42000),
            new Restaurant(3, "Rózsa Kert",            "Szabó László",24000),
            new Restaurant(4, "Fekete Macska Café",    "Tóth Eszter", 31000),
            new Restaurant(5, "Halászlé Műhely",       "Varga Péter", 15000),

            // Ugyanazon tulajdonos – több étterem
            new Restaurant(6, "Kék Duna Café",         "Nagy Anna",   26000),
            new Restaurant(7, "Arany Kanál Bistro",    "Kiss Gábor",  22000),

            // Szélsőértékek
            new Restaurant(8, "Express Falatozó",      "Horváth Béla", 9000),
            new Restaurant(9, "Panoráma Étterem",      "Szabó László",55000),

            // Pontosan azonos bevétel
            new Restaurant(10,"Retro Csárda",          "Varga Péter",24000)
        };

    public IReadOnlyList<Restaurant> GetAll()
    {
        return _items;
    }

    public int Count()
    {
        return _items.Count;
    }

    public int GetTotalIncome()
    {
        return _items.Sum(r => r.Income);
    }
}
