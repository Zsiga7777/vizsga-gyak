using MauiApp1.ViewModels;

namespace MauiApp1.Views;

public partial class UpdateOrCreateTView : ContentPage
{
    public UpdateOrCreateTViewModel viewModel => BindingContext as UpdateOrCreateTViewModel;

    public static string Name => nameof(UpdateOrCreateTView);

    public UpdateOrCreateTView(UpdateOrCreateTViewModel viewModel)
	{
        this.BindingContext = viewModel;
        InitializeComponent();
	}
}