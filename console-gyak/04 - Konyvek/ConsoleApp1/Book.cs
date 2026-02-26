namespace ConsoleApp1;

public class Book
{
    public Book(string vezetéknév, string keresztnév, DateOnly születésiDátum, string cím, string iSBN, string kiadó, int kiadvasiÉv, int ár, string téma, int oldalszám, int honorárium)
    {
        Vezetéknév = vezetéknév;
        Keresztnév = keresztnév;
        SzületésiDátum = születésiDátum;
        Cím = cím;
        ISBN = iSBN;
        Kiadó = kiadó;
        KiadvasiÉv = kiadvasiÉv;
        this.ár = ár;
        Téma = téma;
        Oldalszám = oldalszám;
        Honorárium = honorárium;
    }

    public string Vezetéknév {  get; set; }
    public string Keresztnév{ get; set; }
 public DateOnly SzületésiDátum {  get; set; }
public string Cím {  get; set; }
    public string ISBN { get; set; }
public string Kiadó {  get; set; }
public int KiadvasiÉv { get; set; }
public int ár {  get; set; }
public string Téma {  get; set; }
    public int Oldalszám {  get; set; }
public int Honorárium {  get; set; }

    public override string ToString()
    {
        return $"{Vezetéknév} {Keresztnév}, {SzületésiDátum}: {Cím}, {ISBN}, {Kiadó}, {KiadvasiÉv}, {ár} Ft, {Téma}, {Oldalszám}, {Honorárium} Ft";
    }
}
