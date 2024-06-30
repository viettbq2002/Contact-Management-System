using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactManagementApi.DTO.Category
{
    public class CategoryContactResponse
    {
        public int ContactId { get; set; }
        public string Phone { get; set; } = null!;
        public string FullName { get; set; } = null!;
        public string? CompanyName { get; set; }
        public string? Email { get; set; }
        public string? Nickname { get; set; }
        public string? Hobby { get; set; }
        public string? IsMarked { get; set; }
        public string? Address { get; set; }
        public string? Website { get; set; }
        public DateTime? BirthDate { get; set; }
        public string? Position { get; set; }
        public string? Note { get; set; }

    }
}