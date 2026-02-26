using ConsoleApp1;

List<Book> books = ReadFromFile();
foreach (Book book in books)
{
    Console.WriteLine(book);
}

List<Book> iTBooks = books.Where(x => x.Téma == "informatika").ToList();
WriteToFile("informatika.txt", iTBooks);

List<Book> booksFromThe1900s = books.Where(x => x.KiadvasiÉv < 2000 && x.KiadvasiÉv > 1899).ToList();
WriteToFile("1900.txt", booksFromThe1900s);

List<Book> orderedBooks = books.OrderByDescending(x => x.Oldalszám ).ToList();
WriteToFile("sorbarakott.txt", orderedBooks);

List<BooksByTheme> bookByThemes = books.GroupBy(x => x.Téma).Select(x => new BooksByTheme
{
    Theme = x.Key,
    Books = x.ToList()
}).ToList();

WriteToFile("kategoriak.txt", bookByThemes);
List<Book> ReadFromFile()
{
    string[] lines = File.ReadAllLines("data/adatok.txt");
    List<Book> books = new List<Book>();
    foreach (string line in lines)
    {
        string[] data = line.Split("\t");
        books.Add(new Book(data[0], data[1], DateOnly.Parse(data[2]), data[3], data[4], data[5], int.Parse(data[6]), int.Parse(data[7]), data[8], int.Parse(data[9]), int.Parse(data[10])));
        
    }
    return books;
}

void WriteToFile<T>(string fileName, List<T> books)
{
    File.WriteAllLines($"../../../data/{fileName}", books.Select(x => x.ToString()).ToArray());
}