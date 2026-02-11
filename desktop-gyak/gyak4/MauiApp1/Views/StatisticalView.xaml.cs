using MauiApp1.ViewModels;

namespace MauiApp1.Views;

public partial class StatisticalView : ContentPage
{
	StatisticalViewModel viewModel => this.BindingContext as StatisticalViewModel;
	public static string Name => nameof(StatisticalView);
	public StatisticalView(StatisticalViewModel viewModel)
	{
		this.BindingContext = viewModel;
		InitializeComponent();
	}
}