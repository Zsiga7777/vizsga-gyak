using Microsoft.EntityFrameworkCore;
using WebApplication1;
using WebApplication1.Entities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;Database=Order;Trusted_Connection=True;MultipleActiveResultSets=True;TrustServerCertificate=True;"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();
using (var scope = app.Services.CreateScope())
{
    AppDbContext dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();

    if (!dbContext.Orders.Any())
    {
        string[] lines = File.ReadAllLines("orders.csv");
        OrderEntity order;
        foreach (string line in lines.Skip(1))
        {
            string[] datas = line.Split(",");
            order = new OrderEntity
            {
                Id = int.Parse(datas[0]),
                Username = datas[1],
                Date = DateOnly.Parse(datas[2]),
                OrderAmount = int.Parse(datas[3]),
                Completed =int.Parse( datas[4])
            };
            dbContext.Orders.Add(order);
        }
       await dbContext.SaveChangesAsync();
    }
}

app.Run();
