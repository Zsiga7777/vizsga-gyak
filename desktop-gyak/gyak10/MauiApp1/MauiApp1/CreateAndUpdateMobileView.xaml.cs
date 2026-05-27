using MauiApp1.ViewModels;

namespace MauiApp1;

public partial class CreateAndUpdateMobileView : ContentPage
{
	public static string Name => nameof(CreateAndUpdateMobileView);
	public CreateAndUpdateMobileViewModel ViewModel => this.BindingContext as CreateAndUpdateMobileViewModel;
	public CreateAndUpdateMobileView(CreateAndUpdateMobileViewModel viewModel)
	{
        this.BindingContext = viewModel;
        InitializeComponent();
	}
}