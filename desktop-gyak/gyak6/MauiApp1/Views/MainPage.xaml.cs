using MauiApp1.viewmodels;

namespace MauiApp1
{
    public partial class MainPage : ContentPage
    {
        public MainPageViewModel ViewModel => this.BindingContext as MainPageViewModel;

        public static string Name => nameof(MainPage);
        public MainPage(MainPageViewModel viewModel)
        {
            this.BindingContext = viewModel;
            InitializeComponent();
        }

       
    }
}
