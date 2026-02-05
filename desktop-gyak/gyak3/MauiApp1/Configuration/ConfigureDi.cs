using MauiApp1.Interfaces;
using MauiApp1.Services;
using MauiApp1.ViewModels;
using MauiApp1.Views;

namespace MauiApp1.Configuration;

public static class ConfigureDi
{
    public static MauiAppBuilder DiConfig(this MauiAppBuilder builder)
    {
        builder.Services.AddScoped<IRestaurantService, RestaurantService>();
        builder.Services.AddTransient<IFileService, FileService>();

        builder.Services.AddTransient<ListPageView>();
        builder.Services.AddTransient<ListPageViewModel>();
        return builder;
    }
}
