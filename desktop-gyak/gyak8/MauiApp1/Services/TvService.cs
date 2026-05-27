using MauiApp1.Interfaces;
using MauiApp1.Models;

namespace MauiApp1.Services
{
    public class TvService : ITvService
    {
        private List<TvModel> tvs = new List<TvModel>();

        public List<TvModel> GetAll()
        {
            return tvs;
        }

        public void Add(TvModel model) 
        {
            tvs.Add(model);
        }

        public void Remove(int idenx)
        {
            tvs.RemoveAt(idenx);
        }

        public void Update(int index, TvModel model)
        {
            tvs[index] = model;
        }
    }
}
