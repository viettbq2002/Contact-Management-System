using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactManagementApi.DTO.Category
{
    public class CreateCategoryRequest
    {
        public string CategoryName { get; set; } = null!;
        public string? Description { get; set; }
    }
}