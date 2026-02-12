using MauiApp1.ViewModels;

namespace MauiApp1.Views;

public partial class IncomeView : ContentPage
{
	IncomeViewModel viewModel => this.BindingContext as IncomeViewModel;

	public static string Name => nameof(IncomeView);
	public IncomeView(IncomeViewModel viewModel)
	{
		this.BindingContext = viewModel;
		InitializeComponent();
	}
}