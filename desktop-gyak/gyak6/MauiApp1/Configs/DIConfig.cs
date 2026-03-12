using MauiApp1.iterfaces;
using MauiApp1.services;
using MauiApp1.viewmodels;

namespace MauiApp1.Configs;

public static class DIConfig
{
    public static MauiAppBuilder ConfigureDi(this MauiAppBuilder builder)
    {
        builder.Services.AddTransient<MainPageViewModel>();

        builder.Services.AddTransient<MainPage>();

        builder.Services.AddTransient<IFileService, FileService>();

        return builder;
    }
}
