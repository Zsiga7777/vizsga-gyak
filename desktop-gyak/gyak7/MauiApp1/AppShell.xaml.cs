using MauiApp1.Views;

namespace MauiApp1
{
    public partial class AppShell : Shell
    {
        public AppShell()
        {
            ConfigRoutes();
            InitializeComponent();
        }

        private void ConfigRoutes()
        {
            Routing.RegisterRoute(MainPageView.Name, typeof(MainPageView));
            Routing.RegisterRoute(ListWorkersView.Name, typeof(ListWorkersView));
            Routing.RegisterRoute(ControlPanelView.Name, typeof (ControlPanelView));
            Routing.RegisterRoute(DeleteWorkersView.Name, typeof(DeleteWorkersView));
            Routing.RegisterRoute(UpdateWorkerView.Name, typeof(UpdateWorkerView));
        }
    }
}
