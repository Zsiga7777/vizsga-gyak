using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using gyak2.Interfaces;
using gyak2.Models;
using gyak2.Views;

namespace gyak2.ViewModels;

public partial class UpdateORCreateMobileViewModel(IMobileService mobileService) : PhoneModel, IQueryAttributable
{

    public IAsyncRelayCommand AppearingCommand => new AsyncRelayCommand(OnAppearingAsync);

    public IAsyncRelayCommand SaveCommand => new AsyncRelayCommand(OnSaveAsync);
    public void ApplyQueryAttributes(IDictionary<string, object> query)
    {
        bool hasValue = query.TryGetValue("id", out object result);

        if (!hasValue)
        {
            return;
        }
        PhoneModel temp = mobileService.GetById((uint)result);
        this.Id = temp.Id;
        this.StorageCapacity = temp.StorageCapacity;
        this.Manifacturer = temp.Manifacturer;
        this.Model = temp.Model;
        
    }

    private async Task OnAppearingAsync()
    { }

    private async Task OnSaveAsync()
    {
        if(this.Id == 0)
        {
            mobileService.SavePhone(this);
        }
        else
        {
            mobileService.UpdatePhone(this);
        }
    }
}
