namespace gyak5
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
        }
    }
}
