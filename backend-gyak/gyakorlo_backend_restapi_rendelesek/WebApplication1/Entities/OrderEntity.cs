using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Entities;

[Table("Orders")]
public class OrderEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public int Id { get; set; }
    [Required]
    public string Username { get; set; }
    [Required]
    public DateOnly Date { get; set; }
    [Required]
    public int OrderAmount { get; set; }
    [Required]
    public int Completed { get; set; }
}
