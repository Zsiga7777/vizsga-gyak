using CommunityToolkit.Mvvm.ComponentModel;
using gyak5.Models;
using gyak5.ViewModels;
using System.Collections.ObjectModel;

namespace gyak5
{
    public partial class MainPage : ContentPage
    {
        MainPageViewModel viewModel => this.BindingContext as MainPageViewModel;

        public static string Name => nameof(MainPage);
        

        public MainPage(MainPageViewModel viewModel)
        {
            this.BindingContext = viewModel;
            InitializeComponent();
        }

    }
}
