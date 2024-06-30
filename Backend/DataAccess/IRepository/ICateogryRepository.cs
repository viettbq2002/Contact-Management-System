using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessLogic.Models;

namespace DataAccess.IRepository
{
    public interface ICateogryRepository
    {

        Task<List<Category>> GetCategoriesAsync();

        Task<Category> GetCategoryByIdAsync(int id);

        Task<Category> CreateCategoryAsync(Category category);

        Task<Category> UpdateCategoryAsync(Category category);

        Task<Category> DeleteCategoryAsync(int id);


    }
}