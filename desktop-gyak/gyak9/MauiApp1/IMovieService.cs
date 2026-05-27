using System;
using System.Collections.Generic;
using System.Text;

namespace MauiApp1
{
    public interface IMovieService
    {
        List<Movie> GetAll();
        Movie GetById(int id);
        void Remove(int id);
        void Save(Movie movie);
        void Update(Movie movie);
    }
}
