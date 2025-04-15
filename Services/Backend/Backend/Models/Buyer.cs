using System;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Buyer
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        public long PhoneNumber { get; set; }

        public string Address { get; set; }

        public string UserType { get; set; }  // For example, "Buyer"

        public string storename { get; set; }  // Store name for the seller
        public long pincode { get; set; }
        public string hnscode { get; set; }

        public string profile_picture { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
