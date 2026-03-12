using CommunityToolkit.Maui.Core.Extensions;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using MauiApp1.iterfaces;
using MauiApp1.models;
using System.Collections.ObjectModel;

namespace MauiApp1.viewmodels;

[ObservableObject]
public partial class MainPageViewModel(IFileService fileService)
{
    public IAsyncRelayCommand OnAppearingCommand => new AsyncRelayCommand(OnAppearingAsync);

    private List<MeresModel> _meresek = new List<MeresModel>();

    [ObservableProperty]
    private int numberOfMeres;

    [ObservableProperty]
    private ObservableCollection<MeresModel> meresekAbove13Celsius = new ObservableCollection<MeresModel>();

    [ObservableProperty]
    private double maxTempInMiskolc;

    [ObservableProperty]
    private double averageTemp;

    [ObservableProperty]
    private int numberOfDecreses;

    [ObservableProperty]
    private MeresModel biggestTempIncrease = new MeresModel();
    private async Task OnAppearingAsync()
    {
        _meresek = fileService.GetMeresek();
        NumberOfMeres = _meresek.Count;
        MeresekAbove13Celsius = _meresek.Where(x => x.TemperatureCelsius > (double)13).ToObservableCollection();
        MaxTempInMiskolc = _meresek.Where(x => x.City == "Miskolc").Select(x => x.TemperatureCelsius).Max();
        AverageTemp = _meresek.Average(x => x.TemperatureCelsius);
        NumberOfDecreses = _meresek.Where(x => x.ChangeFromPreviousDay < 0).Count();
        BiggestTempIncrease = _meresek.MaxBy(x => x.ChangeFromPreviousDay);
    }
}
