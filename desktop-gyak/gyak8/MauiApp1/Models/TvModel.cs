using CommunityToolkit.Mvvm.ComponentModel;

namespace MauiApp1.Models;

[ObservableObject]
public partial class TvModel
{
    [ObservableProperty]
    private string name;
    [ObservableProperty]
    private string description;
    [ObservableProperty]
    private int price;
}
