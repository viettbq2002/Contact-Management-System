using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using DataAccess.IRepository;
using ContactManagementApi.DTO.Contact;
using BussinessLogic.Models;

namespace ContactManagementApi.Controllers
{
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

        [HttpGet]
        public async Task<IActionResult> GetContacts()
        {
            var contacts = await _contactRepository.GetContactsAsync();
            var response = _mapper.Map<List<ContactResponse>>(contacts);
            return Ok(response);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetContactById(Guid id)
        {
            var contact = await _contactRepository.GetContactByIdAsync(id);
            return Ok(contact);
        }
        [HttpPost]
        public async Task<IActionResult> CreateContact([FromBody] CreateContactRequest request)
        {
            var contact = _mapper.Map<Contact>(request);
            await _contactRepository.CreateContactAsync(contact);
            return Ok();
        }
    }
}