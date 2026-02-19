using CommunityToolkit.Mvvm.ComponentModel;

namespace gyak5.Models;

public partial class Szo : ObservableObject
{
    public Szo(int azon, string szoto, string szofaj, int gyakori)
    {
        Azon = azon;
        Szoto = szoto;
        Szofaj = szofaj;
        Gyakori = gyakori;
    }

    public int Azon { get; set; }
    public string Szoto { get; set; }
    public string Szofaj { get; set; }
    [ObservableProperty]
    public int gyakori;

}
