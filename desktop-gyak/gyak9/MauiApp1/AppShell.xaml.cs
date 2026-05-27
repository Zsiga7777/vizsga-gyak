using MauiApp1.Pages;

namespace MauiApp1
{
    public partial class AppShell : Shell
    {
        public AppShell()
        {
            InitializeComponent();
        }

        private void CreateRoutes()
        {
            Routing.RegisterRoute(AddOrUpdateMovie.Name, typeof(AddOrUpdateMovie));
            Routing.RegisterRoute(ListAllMovies.Name, typeof(ListAllMovies));
        }
    }
}
