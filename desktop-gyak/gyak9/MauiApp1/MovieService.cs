using System;
using System.Collections.Generic;
using System.Text;

namespace MauiApp1
{
    public class MovieService : IMovieService
    {
        private List<Movie> Movies = new List<Movie>();
        
        public List<Movie> GetAll()
        {
            return Movies;
        }

        public Movie GetById(int id)
        {
            return Movies.FirstOrDefault(x => x.Id == id);
        }

        public void Remove(int id)
        {
            Movies.Remove(GetById(id));
        }

        public void Save(Movie movie)
        {
            movie.Id = Movies.Max(x => x.Id)+1;
            Movies.Add(movie);
        }
        public void Update(Movie movie)
        {
            Movies[Movies.IndexOf(GetById(movie.Id))] = movie;
        }

    }
}
