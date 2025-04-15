using Backend.Controllers;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class EcoContext : DbContext
    {
        public EcoContext(DbContextOptions<EcoContext> options) : base(options) { }

        public DbSet<Buyer> Buyers { get; set; }
        public DbSet<Seller> Sellers { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; } // Ensure OrderItems is included

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>()
                .HasMany(o => o.Products)
                .WithOne(oi => oi.Order)
                .HasForeignKey(oi => oi.OrderId)
                .OnDelete(DeleteBehavior.Cascade);
        }

    }
}