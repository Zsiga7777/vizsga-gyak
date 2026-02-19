using gyak5.ViewModels;

namespace gyak5.Configurations;

public static class DiConfig
{
    public static MauiAppBuilder CongigureDi(this MauiAppBuilder builder)
    {
        builder.Services.AddTransient<MainPageViewModel>();
        builder.Services.AddTransient<MainPage>();
        return builder;
    }
}
