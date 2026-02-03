using gyak2.Interfaces;
using gyak2.Models;

namespace gyak2.Services;

public class MobileService: IMobileService  
{
    private List<PhoneModel> _phones = new List<PhoneModel>()
    {
        new PhoneModel(1, "mate 20 lite", "Huawei", 512),
        new PhoneModel(2, "alma", "appla", 128),
        new PhoneModel(3, "kecske", "sajt", 256)
    };

    public List<PhoneModel> GetAllPhones()
    {
        return _phones; 
    }

    public PhoneModel GetById(uint id)
    {
        return _phones.FirstOrDefault(x => x.Id == id);
    }

    public void SavePhone(PhoneModel phone)
    {
        uint newId = _phones.Last().Id +1;
        phone.Id = newId;
        _phones.Add(phone);
    }

    public void UpdatePhone(PhoneModel phone)
    {
        _phones[_phones.IndexOf(_phones.First(x => x.Id == phone.Id))] = phone;
    }

    public void DeletePhone(uint id)
    {
        _phones.Remove(_phones.First(x =>x.Id == id));
    }
}
