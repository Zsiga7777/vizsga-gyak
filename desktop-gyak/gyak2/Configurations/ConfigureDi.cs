using gyak2.Interfaces;
using gyak2.Services;
using gyak2.ViewModels;
using gyak2.Views;

namespace gyak2.Configurations;

public static class ConfigureDi
{
    public static MauiAppBuilder ConfigureDI(this MauiAppBuilder builder)
    {
        builder.Services.AddScoped<IMobileService, MobileService>();

        builder.Services.AddTransient<ListAllMobileViewModel>();
        builder.Services.AddTransient<UpdateORCreateMobileViewModel>();

        builder.Services.AddTransient<ListAllMobileView>();
        builder.Services.AddTransient<UpdateOrCreateMobileView>();

        return builder;
    }
}
