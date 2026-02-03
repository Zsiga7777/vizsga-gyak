using gyak2.ViewModels;

namespace gyak2.Views;

public partial class UpdateOrCreateMobileView : ContentPage
{
    UpdateORCreateMobileViewModel viewModel => BindingContext as UpdateORCreateMobileViewModel;

    public static string Name => nameof(UpdateOrCreateMobileView);
  
    public UpdateOrCreateMobileView(UpdateORCreateMobileViewModel viewModel)
	{
        this.BindingContext = viewModel;
        InitializeComponent();
	}
}