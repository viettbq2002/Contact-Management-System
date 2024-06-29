using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessLogic.Models;

namespace ContactManagementApi.Service
{
    public interface IJwtGenerator
    {
        string GenerateToken(Guid userId);
    }
}