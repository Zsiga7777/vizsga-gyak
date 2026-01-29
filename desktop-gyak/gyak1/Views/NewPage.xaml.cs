using gyak1.ViewModels;

namespace gyak1.Views;

public partial class NewPage : ContentPage
{
	public NewPageViewModel ViewModel => this.BindingContext as NewPageViewModel;

	public static string Name => nameof(NewPage);
	public NewPage(NewPageViewModel viewModel)
	{
		BindingContext = viewModel;
		InitializeComponent();
	}
}