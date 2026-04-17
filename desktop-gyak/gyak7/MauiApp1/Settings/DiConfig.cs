using MauiApp1.Services;
using MauiApp1.ViewModels;
using MauiApp1.Views;

namespace MauiApp1.Settings;

public static class DiConfig
{
    public static MauiAppBuilder ConfigureDi(this MauiAppBuilder builder)
    {
        builder.Services.AddScoped<IWorkerService, WorkerService>();

        builder.Services.AddTransient<MainPageView>();
        builder.Services.AddTransient<ListWorkersView>();
        builder.Services.AddTransient<ControlPanelView>();
        builder.Services.AddTransient<DeleteWorkersView>();
        builder.Services.AddTransient<UpdateWorkerView>();

        builder.Services.AddTransient<MainPageViewModel>();
        builder.Services.AddTransient<ListWorkersViewModel>();
        builder.Services.AddTransient<ControlPanelViewModel>();
        builder.Services.AddTransient<DeleteWorkersViewModel>();
        builder.Services.AddTransient<UpdateWorkerViewModel>();
        return builder;
    }
}
