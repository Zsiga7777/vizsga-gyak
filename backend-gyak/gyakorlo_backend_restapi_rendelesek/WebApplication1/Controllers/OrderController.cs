using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Dtos;
using WebApplication1.Entities;

namespace WebApplication1.Controllers;

[ApiController]
[Route("/api/orders")]
public class OrderController(AppDbContext dbContext) : ControllerBase
{
    [HttpGet("/user/{username}")]
    public async Task<IActionResult> GetOrdersByUsername([FromRoute]string username)
    {
        List<OrderEntity> orders = await dbContext.Orders.Where(x => x.Username == username).ToListAsync();

        if(orders.Count > 0)
        {
            return Ok(orders);
        }
        else
        {
            return NotFound("Nincs rendelés a megadott felhasználóhoz!");
        }
    }

    [HttpGet("/stats/completed-percentage")]
    public async Task<IActionResult> GetCompletedPercentage()
    {
        List<OrderEntity> orders = await dbContext.Orders.ToListAsync();

        if (orders.Count == 0)
        {
            return NotFound("Egyetlen rendelés sem lett rögzítve!");
        }
       
        int numberOfCompletedOrders = orders.Count(x => x.Completed == 1);
        double percentage =Math.Round( (double)numberOfCompletedOrders / ((double)numberOfCompletedOrders/(double)100),1);

        return Ok(percentage);
    }

    [HttpGet("/stats/average-amount")]
    public async Task<IActionResult> GetAverageAmount()
    {
        List<OrderEntity> orders = await dbContext.Orders.ToListAsync();

        if (orders.Count == 0)
        {
            return NotFound("Egyetlen rendelés sem lett rögzítve!");
        }

        double average = Math.Round(orders.Average(x => x.OrderAmount), 2);

        return Ok(average);
    }

    [HttpGet("/stats/max-amount")]
    public async Task<IActionResult> GetMaxAmount()
    {
        List<OrderEntity> orders = await dbContext.Orders.ToListAsync();

        if (orders.Count == 0)
        {
            return NotFound("Egyetlen rendelés sem lett rögzítve!");
        }

        int maxAmount = orders.Max(x => x.OrderAmount);

        return Ok(maxAmount);
    }

    [HttpGet("/stats/completed-sum")]
    public async Task<IActionResult> GetCompletedSum()
    {
        List<OrderEntity> orders = await dbContext.Orders.ToListAsync();

        if (orders.Where(x => x.Completed == 1).Count() == 0)
        {
            return NotFound("Nincs teljesített rendelés!");
        }

        int sum = orders.Where(x => x.Completed == 1).Sum(x => x.OrderAmount);

        return Ok(sum);
    }

    [HttpGet("/sorted/by-date")]
    public async Task<IActionResult> GetOrderedByDate()
    {
        List<OrderEntity> orders = await dbContext.Orders.ToListAsync();

        if (orders.Any())
        {
            return NotFound("Nincs megjeleníthető rendelés!");
        }

        return Ok(orders.OrderBy(x => x.Date));
    }

    [HttpGet("sorted/by-amount-desc")]
    public async Task<IActionResult> GetOrderedByAmount()
    {
        List<OrderEntity> orders = await dbContext.Orders.ToListAsync();

        if (orders.Any())
        {
            return NotFound("Nincs megjeleníthető rendelés!");
        }

        return Ok(orders.OrderByDescending(x => x.OrderAmount));
    }

    [HttpGet("completed/users")]
    public async Task<IActionResult> GetCompletedUsers()
    {
        List<OrderEntity> orders = await dbContext.Orders.ToListAsync();

        if (!orders.Any(x => x.Completed == 1))
        {
            return NotFound("Nincs teljesített rendelés!");
        }

        return Ok(orders.Select(x => x.Username).Order());
    }

    [HttpDelete("delete-zero-amount")]
    public async Task<IActionResult> DeleteZeroAmount()
    {
        List<OrderEntity> orders = await dbContext.Orders.Where(x => x.Completed == 0).ToListAsync();

        if(!orders.Any())
        {
            return NotFound("Nincs törölhető nulla összegű rendelés!");
        }
        dbContext.Orders.RemoveRange(orders);
        await dbContext.SaveChangesAsync();

        return Ok(new DeleteResponseDto { DeletedCount = orders.Count(), Message = "A nulla összegű rendelések törlése sikeres!" });
    }

    [HttpPatch("orders/{id}/date")]
    public async Task<IActionResult> PatchDate([FromRoute] int id, [FromBody] DateOnly date)
    {
        OrderEntity order = await dbContext.Orders.FirstOrDefaultAsync(x => x.Id == id);

        if (order == null)
        {
            return NotFound("Rendelés ezzel az azonosítóval nem található!");
        }
        order.Date = date;
        await dbContext.SaveChangesAsync();

        return Ok("A rendelés dátuma sikeresen módosítva!");
    }

    [HttpPost("orders")]
    public async Task<IActionResult> PostOrder([FromBody] PostDto dto)
    { 
        if (dto.OrderAmount < 0)
        {
            return BadRequest("A rendelés összege nem lehet nulla vagy negatív!");
        }

        if (!(dto.Completed == 0 || dto.Completed == 1))
        {
            return BadRequest("A completed mező értéke csak 0 vagy 1 lehet!");
        }
        int id = await dbContext.Orders.Select(x => x.Id).MaxAsync() +1;

       await dbContext.Orders.AddAsync(new OrderEntity { Completed = dto.Completed, 
           OrderAmount = dto.OrderAmount ,
       Date = dto.Date,
       Id = id,
       Username = dto.Username
       });
        await dbContext.SaveChangesAsync();

        return Ok(new PostResDto { Id = id, Message = "Rendelés sikeresen rögzítve!" });
    }
}
