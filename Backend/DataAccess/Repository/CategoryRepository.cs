using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessLogic.Models;
using DataAccess.IRepository;

namespace DataAccess.Repository
{
    public class CategoryRepository : ICateogryRepository
    {
        public Task<Category> CreateCategoryAsync(Category category)
        {
            throw new NotImplementedException();
        }

        public Task<Category> DeleteCategoryAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Category>> GetCategoriesAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Category> GetCategoryByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Category> UpdateCategoryAsync(Category category)
        {
            throw new NotImplementedException();
        }
    }
}