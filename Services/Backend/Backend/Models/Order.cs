using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Order
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        public Guid UserId { get; set; }

        // Navigation property for related OrderItems
        public ICollection<OrderItem> Products { get; set; } = new List<OrderItem>();

        [Required]
        public decimal TotalAmount { get; set; }

        [Required]
        public string Status { get; set; } = "Pending";

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }

    public class OrderItem
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        public Guid OrderId { get; set; }

        [ForeignKey("OrderId")]
        public Order Order { get; set; } // Navigation property

        [Required]
        public Guid ProductId { get; set; }

        [Required, Range(1, int.MaxValue, ErrorMessage = "Quantity must be at least 1")]
        public int Quantity { get; set; }
    }
}
