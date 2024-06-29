using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessLogic.Models;

namespace DataAccess.IRepository
{
    public interface IUserRepository
    {
        Task<List<User>> GetUsersAsync();
        Task<User> GetUserAsync(Guid userId);

        Task<User> CreateUserAsync(User user);

        Task<User?> GetUserByUsernameAsync(string userName);

        Task<User> UpdateUserAsync(User user);
        Task<bool> CheckUserExistsAsync(string userName);

    }
}