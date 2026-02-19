using CommunityToolkit.Maui.Core.Extensions;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using gyak5.Models;
using System.Collections.ObjectModel;

namespace gyak5.ViewModels;

[ObservableObject]
public partial class MainPageViewModel
{
    public IAsyncRelayCommand OnAppearingCommand => new AsyncRelayCommand(OnAppearingAsync);
    public IRelayCommand OnChangeCommand => new RelayCommand(ChangeSelectedWords);

    public IRelayCommand OnUpdateCommand => new RelayCommand<int>((id) => OnUpdate(id));

    public IRelayCommand OnSaveCommand => new RelayCommand(OnSave);
    FileService fileService = new FileService();
    [ObservableProperty]
    public ObservableCollection<Szo> szavak = new ObservableCollection<Szo>();

    [ObservableProperty]
    public ObservableCollection<string> szofajok = new ObservableCollection<string>();

    [ObservableProperty]
    private string kivalasztottSzofaj = "Összes";

    [ObservableProperty]
    private bool isChangeVisible = false;

    private int selectedWordId = 0;

    [ObservableProperty]
    private string selectedWordCount = "";

    private List<Szo> taroltSzavak = new List<Szo>();
    private async Task OnAppearingAsync()
    {
        taroltSzavak = fileService.ReadFile();
        Szavak =taroltSzavak.ToObservableCollection();
        Szofajok = Szavak.Select(x => x.Szofaj).Distinct().ToObservableCollection();
        Szofajok.Insert(0, "Összes");
    }

    private void ChangeSelectedWords()
    {
        if(KivalasztottSzofaj == "Összes")
        {
            Szavak = taroltSzavak.ToObservableCollection();
            return;
        }
        Szavak = taroltSzavak.Where(x => x.Szofaj == KivalasztottSzofaj).Take(10).ToObservableCollection();
    }

    private void OnUpdate(int id)
    {
        IsChangeVisible = true;
        SelectedWordCount = $"{Szavak.First(x => x.Azon == id).Gyakori}";
        selectedWordId = id;
    }

    private void OnSave()
    {
        if (int.TryParse(SelectedWordCount, out var wordCount))
        {
            Szo selectedSzo = Szavak.First(x => x.Azon == selectedWordId);
            if(selectedSzo.Gyakori > wordCount)
            {
                return;
            }
            Szavak[Szavak.IndexOf(selectedSzo)].Gyakori = wordCount;
            SelectedWordCount = "";
            selectedWordId = 0;
            IsChangeVisible = false;
        }
    }
}
