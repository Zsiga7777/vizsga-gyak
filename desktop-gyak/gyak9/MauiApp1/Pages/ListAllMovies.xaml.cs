using CommunityToolkit.Mvvm.ComponentModel;
using System.Collections.ObjectModel;

namespace MauiApp1.Pages;

public partial class ListAllMovies : ContentPage
{
	private IMovieService movieService;
	public static string Name => nameof(ListAllMovies);

	[ObservableProperty]
	private partial ObservableCollection<Movie> movies = new ObservableCollection<Movie>();
	public ListAllMovies(IMovieService iMovieService)
	{
		movieService = iMovieService;
		Movies = movieService.GetAll();
		InitializeComponent();
	}
}