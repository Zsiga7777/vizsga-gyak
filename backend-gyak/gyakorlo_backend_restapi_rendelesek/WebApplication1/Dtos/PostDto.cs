namespace WebApplication1.Dtos;

public class PostDto
{
    public string Username { get; set; }
    public DateOnly Date { get; set; }
    public int OrderAmount { get; set; }
    public int Completed { get; set; }
}
