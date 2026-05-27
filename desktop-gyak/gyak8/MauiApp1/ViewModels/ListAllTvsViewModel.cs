using CommunityToolkit.Maui.Core.Extensions;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using MauiApp1.Interfaces;
using MauiApp1.Models;
using MauiApp1.Views;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;

namespace MauiApp1.ViewModels
{
    [ObservableObject]
    public partial class ListAllTvsViewModel(ITvService tvService)
    {
        public IAsyncRelayCommand OnAppearingCommand => new AsyncRelayCommand(OnAppearingAsync);

        public IAsyncRelayCommand OnUpdateCommand => new AsyncRelayCommand<string>((name) => UpdateAsync(name));
        public IAsyncRelayCommand OnRemoveCommand => new AsyncRelayCommand<string>((name) => RemoveAsync(name));
        public IAsyncRelayCommand OnAddCommand => new AsyncRelayCommand(AddAsync);
        [ObservableProperty]
        private ObservableCollection<TvModel> tvs = new ObservableCollection<TvModel>();

        private async Task RemoveAsync(string name)
        {
            int index = Tvs.IndexOf(Tvs.First(x => x.Name == name));
            tvService.Remove(index);
            Tvs.RemoveAt(index);
        }

        private async Task AddAsync()
        {
            await Shell.Current.GoToAsync(UpdateOrCreateTView.Name);
        }

        private async Task UpdateAsync(string name)
        {
            TvModel selected = Tvs.First(x => x.Name == name);
            int index = Tvs.IndexOf(selected);

            ShellNavigationQueryParameters parameter = new ShellNavigationQueryParameters()
            {
                {"tv", selected },
                {"index", index },
            };
            await Shell.Current.GoToAsync(UpdateOrCreateTView.Name, parameter);
        }

        private async Task OnAppearingAsync()
        {
            Tvs = tvService.GetAll().ToObservableCollection();
        }
    }
}
