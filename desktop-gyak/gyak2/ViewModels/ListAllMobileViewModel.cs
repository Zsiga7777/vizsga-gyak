using CommunityToolkit.Maui.Core.Extensions;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using gyak2.Interfaces;
using gyak2.Models;
using gyak2.Views;
using System.Collections.ObjectModel;

namespace gyak2.ViewModels;

[ObservableObject]
public partial class ListAllMobileViewModel(IMobileService mobileService)
{
    public IAsyncRelayCommand AppearingCommand => new AsyncRelayCommand(OnAppearingAsync);

    public IRelayCommand DeleteCommand => new RelayCommand<uint>((id) => OnDelete(id));
    public IAsyncRelayCommand UpdateCommand => new AsyncRelayCommand<uint>((id) => OnUpdate(id));


    [ObservableProperty]
    ObservableCollection<PhoneModel> phones = new ObservableCollection<PhoneModel>();
    private async Task OnAppearingAsync()
    {
        Phones = mobileService.GetAllPhones().ToObservableCollection();
    }

    private void OnDelete(uint id)
    {
        mobileService.DeletePhone(id);
        Phones.Remove(Phones.First(x => x.Id == id));
    }

    private async Task OnUpdate(uint id)
    {
        ShellNavigationQueryParameters parameter = new ShellNavigationQueryParameters()
        {
            {"id", id}
};
       await Shell.Current.GoToAsync(UpdateOrCreateMobileView.Name, parameter);
    }
}
