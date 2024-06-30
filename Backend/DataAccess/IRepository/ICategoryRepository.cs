using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessLogic.Models;

namespace DataAccess.IRepository
{
    public interface ICategoryRepository
    {

        Task<List<Category>> GetCategoriesByUserAsync(Guid userId);

        Task<Category?> GetCategoryByIdAsync(int id);

        Task<Category> CreateCategoryAsync(Category category);

        Task<Category> UpdateCategoryAsync(Category category);

        Task DeleteCategoryAsync(int id);



    }
}