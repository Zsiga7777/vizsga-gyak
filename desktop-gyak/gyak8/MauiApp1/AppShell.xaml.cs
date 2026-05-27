using MauiApp1.Views;

namespace MauiApp1
{
    public partial class AppShell : Shell
    {
        public AppShell()
        {
            InitializeComponent();
            CreateRoutes();
        }

        private void CreateRoutes()
        {
            Routing.RegisterRoute(ListAllTvsView.Name, typeof(ListAllTvsView));
            Routing.RegisterRoute(UpdateOrCreateTView.Name, typeof(UpdateOrCreateTView));
        }
    }
}
