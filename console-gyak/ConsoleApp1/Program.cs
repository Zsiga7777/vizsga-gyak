using ConsoleApp1;

FileService fileService = new FileService();

List<Szo> szavak = fileService.ReadFile();

List<string> sorok  = szavak.Select(x => x.ToString()).ToList();
fileService.WriteFile("../../../data/szo10000.csv", sorok);

List<Szofajok> szofajok = szavak.GroupBy(x => x.Szofaj)
    .Select(y => new Szofajok 
    { Szofaj = y.Key, 
        Szavak = y.OrderByDescending(x => x.Gyakori).Take(10).Select(c => c.Szoto).ToList()}).ToList();

List<string> szofajSorok = szofajok.Select(x => x.ToString()).ToList();
fileService.WriteFile("../../../data/leggyakoribb.csv", szofajSorok);