using MauiApp1.ViewModels;

namespace MauiApp1
{
    public partial class MainPage : ContentPage
    {
        MainPageViewModel ViewModel => this.BindingContext as MainPageViewModel;
        public static string Name => nameof(MainPage);

        public MainPage(MainPageViewModel viewModel)
        {
            this.BindingContext = viewModel;
            InitializeComponent();
        }


    }
}
