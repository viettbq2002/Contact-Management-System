using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactManagementApi.DTO.Auth
{
    public class RegisterRequest
    {
        public string Username { get; set; } = null!;
        public string FullName { get; set; } = null!;
        public string? Address { get; set; }
        public DateTime? Dob { get; set; }
        public string Phone { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}