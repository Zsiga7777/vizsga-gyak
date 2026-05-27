using ConsoleApp1;

string[] lines = File.ReadAllLines("data/snooker.txt");
List<Snooker> snookers = new List<Snooker>();
foreach (string line in lines.Skip(1))
{
    string[] data = line.Split(";");
    snookers.Add(new Snooker(int.Parse(data[0]), data[1], data[2], int.Parse(data[3])));
}

Console.WriteLine($"3. feladat: A világranglistán {snookers.Count} versenyző szerepel");
Console.WriteLine($"4. feladat: A versenyzők átlagosan {Math.Round(snookers.Average(x => x.Price), 2).ToString("F2")} fontot kerestek");
Snooker bestChinese = snookers.Where(x => x.Country == "Kína").MaxBy(x => x.Price);
Console.WriteLine($"5. feladat: A legjobban kereső kaníi versenyző:\n\tHelyezés: {bestChinese.Position}\n\tNév: {bestChinese.Name}\n\tOrszág: {bestChinese.Country}\n\tNyeremény összege: {(bestChinese.Price *380).ToString("N0").Replace(",", " ")} Ft");
Console.WriteLine($"6. feladat: A versenyzők között {(snookers.Any(x => x.Country == "Norvégia") ? "van" : "nincs")} norvég versenyző");

List<CountryByRacerNumber> countryByRacerNumbers = snookers.GroupBy(x => x.Country).Select(y => new CountryByRacerNumber
{
    Country = y.Key,
    Number = y.Count()
}).ToList();

Console.WriteLine("7. feladat: Statisztika");
foreach  (CountryByRacerNumber country in countryByRacerNumbers)
{
    if(country.Number > 4)
    {
        Console.WriteLine(country);
    }
}