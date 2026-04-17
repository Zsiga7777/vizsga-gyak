using MauiApp1.ViewModels;

namespace MauiApp1.Views;

public partial class UpdateWorkerView : ContentPage
{
    public UpdateWorkerViewModel viewModel => this.BindingContext as UpdateWorkerViewModel;

    public static string Name => nameof(UpdateWorkerView);

    public UpdateWorkerView(UpdateWorkerViewModel viewModel)
	{
        this.BindingContext = viewModel;
        InitializeComponent();
	}
}