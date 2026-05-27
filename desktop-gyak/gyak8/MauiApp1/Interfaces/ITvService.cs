using MauiApp1.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MauiApp1.Interfaces
{
    public interface ITvService
    {
        void Add(TvModel model);
        List<TvModel> GetAll();
        void Remove(int idenx);
        void Update(int index, TvModel model);
    }
}
