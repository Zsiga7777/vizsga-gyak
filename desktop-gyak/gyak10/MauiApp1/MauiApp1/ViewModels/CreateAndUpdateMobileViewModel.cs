using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using System;
using System.Collections.Generic;
using System.Text;

namespace MauiApp1.ViewModels
{
    [ObservableObject]
    public partial class CreateAndUpdateMobileViewModel(IMobileService mobileService) : IQueryAttributable
    {
        public IAsyncRelayCommand SaveCommand => new AsyncRelayCommand(SaveAsync);
        public IAsyncRelayCommand GoBackAsyncCommand => new AsyncRelayCommand(GoBackAsync);

        [ObservableProperty]
        private MobileModel mobile = new MobileModel();
private async Task GoBackAsync()
        {
            await Shell.Current.GoToAsync(MainPage.Name);
        }

        private async Task SaveAsync()
        {
            Mobile.Manufacturer = Mobile.Manufacturer?.Trim();
            Mobile.Name = Mobile.Name?.Trim();
            if (Mobile.Manufacturer == "" || Mobile.Name == "" || Mobile.Price <= 0)
            {
                await Shell.Current.DisplayAlertAsync("Hiba", "Hibás adat", "ok");
                return;
            }

            if(Mobile.Id != 0)
            {
                mobileService.UpdateMobile(Mobile);
            }
            else
            {
                mobileService.SaveNewMobile(Mobile);
            }

            await Shell.Current.GoToAsync(MainPage.Name);
        }

        public void ApplyQueryAttributes(IDictionary<string, object> query)
        {
            if (!query.ContainsKey("mobile"))
            {
                return;
            }
            Mobile = query["mobile"] as MobileModel; 
        }
    }
}
