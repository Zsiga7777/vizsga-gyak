using MauiApp1.Interfaces;
using MauiApp1.Services;
using MauiApp1.ViewModels;
using MauiApp1.Views;

namespace MauiApp1.Settings
{
    public static class DIConfig
    {
        public static MauiAppBuilder ConfigDi(this MauiAppBuilder builder) 
        {
            builder.Services.AddScoped<ITvService, TvService>();

            builder.Services.AddTransient<ListAllTvsViewModel>();
            builder.Services.AddTransient<UpdateOrCreateTViewModel>();

            builder.Services.AddTransient<ListAllTvsView>();
            builder.Services.AddTransient<UpdateOrCreateTView>();

            return builder;
        
        }
    }
}
