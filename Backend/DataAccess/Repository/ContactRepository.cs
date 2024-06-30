using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessLogic.Models;
using DataAccess.IRepository;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repository
{
    public class ContactRepository : IContactRepository
    {
        private readonly ContactManagmentContext _context;

        public ContactRepository(ContactManagmentContext context)
        {
            _context = context;
        }

        public async Task<Contact> CreateContactAsync(Contact contact)
        {
            await _context.Contacts.AddAsync(contact);
            await _context.SaveChangesAsync();
            return contact;
        }

        public Task DeleteContactAsync(Contact contact)
        {
            throw new NotImplementedException();
        }

        public Task<Contact> GetContactByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Contact>> GetContactsAsync()
        {
            var listContact = await _context.Contacts.ToListAsync();
            return listContact;
        }

        public async Task<List<Contact>> GetContactsByUserIdAsync(Guid userId)
        {
            var listContact = await _context.Contacts.Where(x => x.UserId == userId).ToListAsync();
            return listContact;
        }

        public Task UpdateContactAsync(Contact contact)
        {
            throw new NotImplementedException();
        }
    }
}