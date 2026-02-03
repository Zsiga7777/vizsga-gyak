using gyak2.Models;

namespace gyak2.Interfaces;

public interface IMobileService
{
    void DeletePhone(uint id);
    List<PhoneModel> GetAllPhones();
    PhoneModel GetById(uint id);
    void SavePhone(PhoneModel phone);
    void UpdatePhone(PhoneModel phone);
}
