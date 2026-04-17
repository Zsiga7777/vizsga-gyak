using MauiApp1.ViewModels;

namespace MauiApp1.Views;

public partial class ControlPanelView : ContentPage
{
    public ControlPanelViewModel viewModel => this.BindingContext as ControlPanelViewModel;

    public static string Name => nameof(ControlPanelView);
    public ControlPanelView(ControlPanelViewModel viewModel)
	{
        this.BindingContext = viewModel;
        InitializeComponent();
	}
}