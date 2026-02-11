using MauiApp1.Interfaces;
using MauiApp1.Services;
using MauiApp1.ViewModels;
using MauiApp1.Views;

namespace MauiApp1.Configurations;

public static class DIConfiguration
{
    public static MauiAppBuilder ConfigureDi(this MauiAppBuilder builder)
    {
        builder.Services.AddTransient<IRestaurantsService, RestaurantService>();

        builder.Services.AddTransient<MainPage>();
        builder.Services.AddTransient<StatisticalView>();

        builder.Services.AddTransient<MainPageViewModel>();
        builder.Services.AddTransient<StatisticalViewModel>();

        return builder;
    }
}
