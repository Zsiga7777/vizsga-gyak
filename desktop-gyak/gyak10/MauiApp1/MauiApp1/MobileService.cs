using System;
using System.Collections.Generic;
using System.Text;

namespace MauiApp1
{
    public class MobileService : IMobileService
    {
        private List<MobileModel> _mobiles = new List<MobileModel>() ;
        
        public List<MobileModel> GetAll() { return _mobiles ; }
        public void SaveNewMobile ( MobileModel model )
        {
            if (_mobiles.Count == 0)
            {
                model.Id = 1;
            }
            else
            {
                model.Id = _mobiles.Max(x => x.Id) + 1;
            }
            _mobiles.Add(model);
        }

        public void UpdateMobile( MobileModel model )
        {
            int index = _mobiles.FindIndex(x => x.Id == model.Id);
            _mobiles[index] = model;
        }

        public void DeletePhone(int id)
        {
            _mobiles.RemoveAt(_mobiles.FindIndex(x => x.Id == id));
        }
    }
}
