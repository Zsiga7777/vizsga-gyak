using CommunityToolkit.Mvvm.ComponentModel;

namespace gyak2.Models;


public partial class PhoneModel : ObservableObject
{
    [ObservableProperty]
    public uint id;
    [ObservableProperty]
    public string model;
    [ObservableProperty]
    public string manifacturer;
    [ObservableProperty]
    public uint storageCapacity;

    public PhoneModel()
    {
        
    }
    public PhoneModel(uint id, string model, string manifacturer, uint storageCapacity)
    {
        Id = id;
        Model = model;
        Manifacturer = manifacturer;
        StorageCapacity = storageCapacity;
    }

}
