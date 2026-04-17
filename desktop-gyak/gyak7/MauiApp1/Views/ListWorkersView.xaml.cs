using MauiApp1.ViewModels;

namespace MauiApp1.Views;

public partial class ListWorkersView : ContentPage
{
    public ListWorkersViewModel viewModel => this.BindingContext as ListWorkersViewModel;

    public static string Name => nameof(ListWorkersView);

    public ListWorkersView(ListWorkersViewModel viewModel)
	{
        this.BindingContext = viewModel;
        InitializeComponent();
	}
}