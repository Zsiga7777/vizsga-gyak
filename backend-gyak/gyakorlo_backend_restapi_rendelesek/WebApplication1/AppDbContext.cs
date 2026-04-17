using Microsoft.EntityFrameworkCore;
using WebApplication1.Entities;

namespace WebApplication1;

public class AppDbContext : DbContext
{
    public DbSet<OrderEntity> Orders { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    { }

}
