using ConsoleApp1;
using System.Text;

string[] lines = File.ReadAllLines("data/EUcsatlakozas.txt", Encoding.UTF7);
List<Contry> countries = new List<Contry>();
foreach (string line in lines)
{
    string[] datas = line.Split(";");
    countries.Add(new Contry(datas[0], DateOnly.Parse(datas[1])));
}

int numberOfCountries = countries.Count;
Console.WriteLine($"3. feladat: EU tagállamainak száma: {numberOfCountries}");

int countriesJoinedIn2007 = countries.Where(x => x.JoinDate.Year == 2007).Count();
Console.WriteLine($"4. feladat: 2007-ben {countriesJoinedIn2007} ország csatlakozott");

Console.WriteLine($"5. feladat: Magyarország csatlakozásának dáruma: {countries.First(x => x.Name == "Magyarország").JoinDate.ToString("yyyy.MM.dd")}");
Console.WriteLine($"6. feladat: {(countries.Any(x => x.JoinDate.Month == 5) ? "Májusban volt csatlakozás" : "Nem volt csatlakozás")}");
Console.WriteLine($"7., feladat: LEgutoljára csatlakozott ország: {countries.MaxBy(x => x.JoinDate).Name}");

List<YearCountryCount> years = countries.GroupBy(x => x.JoinDate.Year).Select(y => new YearCountryCount(y.Key, y.Count())).ToList();
Console.WriteLine($"8. feladat: statisztika");
foreach (YearCountryCount year in years)
{
    Console.WriteLine(year);
}