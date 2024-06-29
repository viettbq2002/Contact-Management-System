using System;
using System.Collections.Generic;

namespace BussinessLogic.Models
{
    public partial class User
    {
        public User()
        {
            Contacts = new HashSet<Contact>();
        }

        public Guid Id { get; set; } = Guid.NewGuid();
        public string Username { get; set; } = null!;
        public string FullName { get; set; } = null!;
        public DateTime? Dob { get; set; }
        public string? Address { get; set; }
        public string Phone { get; set; } = null!;
        public string HashedPassword { get; set; } = null!;

        public virtual ICollection<Contact> Contacts { get; set; }
    }
}
