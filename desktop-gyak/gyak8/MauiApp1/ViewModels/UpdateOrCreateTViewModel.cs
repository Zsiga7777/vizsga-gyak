using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using MauiApp1.Interfaces;
using MauiApp1.Models;
using MauiApp1.Views;
using System;
using System.Collections.Generic;
using System.Text;

namespace MauiApp1.ViewModels
{
    [ObservableObject]
    public partial class UpdateOrCreateTViewModel(ITvService tvService) : IQueryAttributable
    {
        public IAsyncRelayCommand SaveCommand => new AsyncRelayCommand(SaveAsyc);
        public IAsyncRelayCommand ReturnCommand => new AsyncRelayCommand(ReturnAsync);
        [ObservableProperty]
        private TvModel tv = new TvModel();

        private int index = -1;
        public void ApplyQueryAttributes(IDictionary<string, object> query)
        {
            if (!query.Keys.Contains("tv") || !query.Keys.Contains("index"))
            {
                return;
            }

            Tv = query["tv"] as TvModel;
            index = int.Parse(query["index"].ToString());
        }

        private async Task SaveAsyc()
        {
            Tv.Name = Tv.Name?.Trim();
            Tv.Description = Tv.Description?.Trim();
            if (Tv.Name.Length == 0 || Tv.Name.Length == 0 || Tv.Price < 0) { return; }
            if (index != -1)
            {
                tvService.Update(index, Tv);

            }
            else
            {
                tvService.Add(Tv);
            }
            await Shell.Current.GoToAsync(ListAllTvsView.Name);
        }

        private async Task ReturnAsync()
        {
            await Shell.Current.GoToAsync(ListAllTvsView.Name);
        }
    }
}
