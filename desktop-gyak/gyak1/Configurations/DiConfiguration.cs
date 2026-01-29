using gyak1.ViewModels;
using gyak1.Views;

namespace gyak1.Configurations;

public static class DiConfiguration
{
    public static MauiAppBuilder UseDiConfig(this MauiAppBuilder builder)
    {
        builder.Services.AddTransient<NewPageViewModel>();

        builder.Services.AddTransient<NewPage>();
        return builder;
    }
}
