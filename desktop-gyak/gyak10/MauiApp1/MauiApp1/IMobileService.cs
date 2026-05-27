using System;
using System.Collections.Generic;
using System.Text;

namespace MauiApp1
{
    public interface IMobileService
    {
        void DeletePhone(int id);
        List<MobileModel> GetAll();
        void SaveNewMobile(MobileModel model);
        void UpdateMobile(MobileModel model);
    }
}
