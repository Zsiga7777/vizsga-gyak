using CommunityToolkit.Maui.Core.Extensions;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;

namespace MauiApp1.ViewModels
{
    [ObservableObject]
    public partial class MainPageViewModel(IMobileService mobileService)
    {
       public IAsyncRelayCommand AppearingCommand => new AsyncRelayCommand(OnAppearingAsync);
        public IAsyncRelayCommand SaveNewCommand => new AsyncRelayCommand(SaveNewAsymc);
        public IAsyncRelayCommand UpdateCommand => new AsyncRelayCommand<int>((id) => UpdateAsync(id));
        public IRelayCommand DeleteCommand => new RelayCommand<int>((id) => Delete(id));

        [ObservableProperty]
        private ObservableCollection<MobileModel> mobiles = new ObservableCollection<MobileModel>();

        private void Delete(int id)
        {
            mobileService.DeletePhone(id);
            Mobiles.Remove(Mobiles.First(x => x.Id == id));
        }

        private async Task UpdateAsync(int id)
        {
            MobileModel mobile = Mobiles.First(x => x.Id == id);
            ShellNavigationQueryParameters parameters = new ShellNavigationQueryParameters()
            {
                { "mobile", mobile } }
            ;
            await Shell.Current.GoToAsync(CreateAndUpdateMobileView.Name, parameters);
        }

        private async Task SaveNewAsymc()
        {
            await Shell.Current.GoToAsync(CreateAndUpdateMobileView.Name);
        }

        private async Task OnAppearingAsync()
        {
            Mobiles = mobileService.GetAll().ToObservableCollection();
        }
    }
}
