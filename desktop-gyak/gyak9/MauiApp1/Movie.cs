using CommunityToolkit.Mvvm.ComponentModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace MauiApp1
{
    [ObservableObject]
    public partial class Movie 
    {
        [ObservableProperty]
        private int id;
        [ObservableProperty]
        private string name;
        [ObservableProperty]
        private int releaseYear;
        [ObservableProperty]
        private int price;
    }
}
