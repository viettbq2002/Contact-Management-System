using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactManagementApi.DTO.Auth;

namespace ContactManagementApi.DTO.Category
{
    public class CategoryResponse
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = null!;
        public string? Description { get; set; }

        public List<CategoryContactResponse> Contacts { get; set; } = new List<CategoryContactResponse>();
    }
}