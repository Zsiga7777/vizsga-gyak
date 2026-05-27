namespace MauiApp1
{
    public partial class AppShell : Shell
    {
        public AppShell()
        {
            InitializeComponent();
            SetRoutes();
        }

        private void SetRoutes()
        {
            Routing.RegisterRoute(MainPage.Name, typeof(MainPage));
            Routing.RegisterRoute(CreateAndUpdateMobileView.Name, typeof(CreateAndUpdateMobileView));
        }
    }
}
