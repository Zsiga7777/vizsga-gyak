using MauiApp1.ViewModels;
using System.Runtime.CompilerServices;

namespace MauiApp1.Views;

public partial class MainPageView : ContentPage
{
    public MainPageViewModel viewModel => this.BindingContext as MainPageViewModel;

    public static string Name => nameof(MainPageView);

    public MainPageView(MainPageViewModel viewModel)
    {
        this.BindingContext = viewModel;
        InitializeComponent();
    }

    
}
