using MauiApp1.ViewModels;

namespace MauiApp1.Views;

public partial class ListAllTvsView : ContentPage
{
	public ListAllTvsViewModel viewModel => BindingContext as ListAllTvsViewModel;

	public static string Name => nameof(ListAllTvsView);
	public ListAllTvsView(ListAllTvsViewModel viewModel)
	{
		this.BindingContext = viewModel;
		InitializeComponent();
	}
}