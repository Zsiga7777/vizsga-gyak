using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1;

[Table("Ships")]
public class ShipEntity
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public uint Id { get; set; }
    public string Name {  get; set; }
        public string Class { get; set; }
    public string RaceFaction { get; set; }
        public int Length { get; set; }
        public int Crew { get; set;  }
    [MaxWarp], [Armament], [ShieldType], [HullMaterial], [Role]
}
