using Microsoft.AspNetCore.Mvc;
using Backend.Data;
using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly EcoContext _context;

        public OrderController(EcoContext context)
        {
            _context = context;
        }

        // Get all orders
        [HttpGet("get-all")]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            return await _context.Orders.Include(o => o.Products).ToListAsync();
        }

        // Get orders by user
        [HttpGet("get-by-user/{userId}")]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrdersByUser(Guid userId)
        {
            var orders = await _context.Orders.Where(o => o.UserId == userId).Include(o => o.Products).ToListAsync();
            if (!orders.Any())
                return NotFound(new { message = "No orders found for this user." });
            return Ok(orders);
        }

        // Get order by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(Guid id)
        {
            var order = await _context.Orders.Include(o => o.Products).FirstOrDefaultAsync(o => o.Id == id);
            if (order == null)
                return NotFound();
            return order;
        }

        // Place an order
        [HttpPost("place")]
        public async Task<IActionResult> PlaceOrder([FromBody] Order order)
        {
            if (order == null || order.Products == null || !order.Products.Any())
                return BadRequest("Invalid order data.");

            order.Id = Guid.NewGuid();
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Order placed successfully!", orderId = order.Id });
        }
    }
}