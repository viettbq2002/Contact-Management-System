using System;
using System.Collections.Generic;

namespace BussinessLogic.Models
{
    public partial class Category
    {
        public Category()
        {
            Contacts = new HashSet<Contact>();
        }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = null!;
        public string? Description { get; set; }

        public virtual ICollection<Contact> Contacts { get; set; }
    }
}
