using MauiApp1.ViewModels;

namespace MauiApp1.Views;

public partial class ListPageView : ContentPage
{
	ListPageViewModel viewModel => this.BindingContext as ListPageViewModel;

	public static string Name => nameof(ListPageView);
	public ListPageView(ListPageViewModel viewModel)
	{
		this.BindingContext = viewModel;
		InitializeComponent();
	}
}