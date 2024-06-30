using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DataAccess.IRepository;
using System.Security.Claims;
using AutoMapper;
using ContactManagementApi.DTO.Category;
using BussinessLogic.Models;
using Microsoft.AspNetCore.Authorization;

namespace ContactManagementApi.Controllers
{
    [ApiController]
    [Route("api/Categories")]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IContactRepository _contactRepository;
        private readonly IMapper _mapper;
        private Guid? GetCurrentUserId()
        {
            var userIdString = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier);
            if (userIdString == null)
                return null;
            var currentUserId = Guid.Parse(userIdString.Value);
            return currentUserId;

        }

        public CategoryController(ICategoryRepository categoryRepository, IMapper mapper, IContactRepository contactRepository)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
            _contactRepository = contactRepository;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetCategories(Guid userId)
        {
            var categories = await _categoryRepository.GetCategoriesByUserAsync(userId);
            var response = _mapper.Map<List<CategoryResponse>>(categories);
            return Ok(response);
        }
        [HttpGet("{categoryId}/details")]
        public async Task<IActionResult> GetCategoryById(int id)
        {
            var category = await _categoryRepository.GetCategoryByIdAsync(id);
            return Ok(category);
        }
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateCategory([FromBody] CreateCategoryRequest request)
        {
            var userId = GetCurrentUserId();
            if (userId == null)
            {
                return Unauthorized(new { Message = "Unauthorized, Please login" });
            }
            var category = _mapper.Map<Category>(request);
            category.UserId = (Guid)userId;
            await _categoryRepository.CreateCategoryAsync(category);
            return Ok(new { Message = "Category created successfully" });
        }
        [HttpDelete("{categoryId}")]
        public async Task<IActionResult> DeleteCategory(int categoryId)
        {
            await _categoryRepository.DeleteCategoryAsync(categoryId);
            return Ok(new { Message = "Category deleted successfully" });
        }
        [HttpPut("{categoryId}/contact/{contactId}")]
        public async Task<IActionResult> AddContactToCategory(int categoryId, int contactId)
        {
            var contact = await _contactRepository.GetContactByIdAsync(contactId);
            var category = await _categoryRepository.GetCategoryByIdAsync(categoryId);
            category.Contacts.Add(contact);
            await _categoryRepository.UpdateCategoryAsync(category);
            return Ok(new { Message = "Contact added to category successfully" });
        }
    }
}