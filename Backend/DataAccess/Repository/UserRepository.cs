using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessLogic.Models;
using DataAccess.IRepository;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ContactManagmentContext _context;

        public UserRepository(ContactManagmentContext context)
        {
            _context = context;
        }

        public async Task<bool> CheckUserExistsAsync(string userName)
        {
            return await _context.Users.AnyAsync(x => x.Username == userName);

        }

        public async Task<User> CreateUserAsync(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;

        }


        public Task<User> GetUserAsync(Guid userId)
        {
            throw new NotImplementedException();
        }

        public async Task<User?> GetUserByUsernameAsync(string userName)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username == userName);
            return user;
        }

        public async Task<List<User>> GetUsersAsync()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }

        public async Task<User> UpdateUserAsync(User user)
        {
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
            return user;
        }
    }
}