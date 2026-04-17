using MauiApp1.ViewModels;

namespace MauiApp1.Views;

public partial class DeleteWorkersView : ContentPage
{
    public DeleteWorkersViewModel viewModel => this.BindingContext as DeleteWorkersViewModel;

    public static string Name => nameof(DeleteWorkersView);
    public DeleteWorkersView(DeleteWorkersViewModel viewModel)
	{
        this.BindingContext = viewModel;
        InitializeComponent();
	}
}