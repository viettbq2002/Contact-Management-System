using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactManagementApi.DTO.Auth
{
    public class LoginResponse
    {
        public Guid Id { get; set; }
        public string Username { get; set; } = null!;
        public string FullName { get; set; } = null!;
        public DateTime? Dob { get; set; }
        public string? Address { get; set; }
        public string Phone { get; set; } = null!;

        public string AccessToken { get; set; } = null!;

        public string TokenType { get; set; } = "Bearer";

    }
}