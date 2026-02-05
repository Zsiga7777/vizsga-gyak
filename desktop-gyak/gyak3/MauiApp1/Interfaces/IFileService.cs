using MauiApp1.Models;

namespace MauiApp1.Interfaces;

public interface IFileService
{
    List<Restaurant> ReadFile();
}
