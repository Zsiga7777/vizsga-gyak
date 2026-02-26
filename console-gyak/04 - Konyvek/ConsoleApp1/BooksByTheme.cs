namespace ConsoleApp1;

public class BooksByTheme
{
    public string Theme {  get; set; }
    public List<Book> Books { get; set; }

    public override string ToString()
    {
        string temp = $"{Theme}:\n";
        foreach (Book book in Books) 
        {
            temp += $"\t-{book.ToString()}\n";
        
        }
        return temp;
    }
}
