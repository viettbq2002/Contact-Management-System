using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using DataAccess.IRepository;
using ContactManagementApi.DTO.Contact;
using BussinessLogic.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
namespace ContactManagementApi.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    [ApiController]
    [Route("api/Contacts")]
    public class ContactController : ControllerBase
    {
        private readonly IContactRepository _contactRepository;
        private readonly IMapper _mapper;

        public ContactController(IContactRepository contactRepository, IMapper mapper)
        {
            _contactRepository = contactRepository;
            _mapper = mapper;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetContacts(Guid userId)
        {
            var contacts = await _contactRepository.GetContactsByUserIdAsync(userId);
            var response = _mapper.Map<List<ContactResponse>>(contacts);
            return Ok(response);
        }
        [HttpGet("{contactId}/details")]
        public async Task<IActionResult> GetContactById(int id)
        {
            var contact = await _contactRepository.GetContactByIdAsync(id);
            return Ok(contact);
        }
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateContact([FromBody] CreateContactRequest request)
        {
            var userId = GetCurrentUserId();
            if (userId == null)
            {
                return Unauthorized(new { Message = "Unauthorized, Please login" });
            }
            var contact = _mapper.Map<Contact>(request);
            contact.UserId = (Guid)userId;
            await _contactRepository.CreateContactAsync(contact);
            return Ok(new { Message = "Contact created successfully" });
        }
        private Guid? GetCurrentUserId()
        {
            var userIdString = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier);
            if (userIdString == null)
                return null;
            var currentUserId = Guid.Parse(userIdString.Value);
            return currentUserId;

        }
    }
}