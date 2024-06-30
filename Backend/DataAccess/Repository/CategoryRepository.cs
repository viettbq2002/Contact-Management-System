using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessLogic.Models;
using DataAccess.IRepository;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly ContactManagmentContext _context;

        public CategoryRepository(ContactManagmentContext context)
        {
            _context = context;
        }


        public async Task<Category> CreateCategoryAsync(Category category)
        {
            await _context.Categories.AddAsync(category);
            await _context.SaveChangesAsync();
            return category;


        }

        public async Task DeleteCategoryAsync(int id)
        {
            var category = new Category { CategoryId = id };
            _context.Categories.Attach(category);
            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Category>> GetCategoriesByUserAsync(Guid userId)
        {
            var listCategory = await _context.Categories.Where(x => x.UserId == userId).Include(x => x.Contacts).ToListAsync();
            return listCategory;

        }

        public async Task<Category?> GetCategoryByIdAsync(int id)
        {
            var category = await _context.Categories.Where(x => x.CategoryId == id).FirstOrDefaultAsync();
            return category;
        }

        public async Task<Category> UpdateCategoryAsync(Category category)
        {
            _context.Categories.Update(category);
            await _context.SaveChangesAsync();
            return category;

        }
    }
}