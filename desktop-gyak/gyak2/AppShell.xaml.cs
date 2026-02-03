using gyak2.Views;

namespace gyak2
{
    public partial class AppShell : Shell
    {
        public AppShell()
        {
            InitializeComponent();
            ConfigureNavigation();
        }

        private void ConfigureNavigation()
        {
            Routing.RegisterRoute(ListAllMobileView.Name, typeof(ListAllMobileView));
            Routing.RegisterRoute(UpdateOrCreateMobileView.Name, typeof(UpdateOrCreateMobileView));
        }
    }
}
