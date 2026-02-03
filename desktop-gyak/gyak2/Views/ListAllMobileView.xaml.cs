using gyak2.ViewModels;

namespace gyak2.Views;

public partial class ListAllMobileView : ContentPage
{
	ListAllMobileViewModel viewModel => BindingContext as ListAllMobileViewModel;

	public static string Name => nameof(ListAllMobileView); 
	public ListAllMobileView(ListAllMobileViewModel viewModel)
	{
		this.BindingContext = viewModel;
		InitializeComponent();
	}
}