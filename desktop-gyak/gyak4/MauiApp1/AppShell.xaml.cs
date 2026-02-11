using MauiApp1.Views;

namespace MauiApp1
{
    public partial class AppShell : Shell
    {
        public AppShell()
        {
            SetRoutes();
            InitializeComponent();
        }

        private void SetRoutes()
        {
            Routing.RegisterRoute(MainPage.Name, typeof(MainPage));
            Routing.RegisterRoute(StatisticalView.Name, typeof(StatisticalView));
        }
    }
}
