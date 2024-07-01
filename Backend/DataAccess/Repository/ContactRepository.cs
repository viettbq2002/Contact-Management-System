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

        public async Task DeleteContactAsync(int contactId)
        {
            var contact = new Contact { ContactId = contactId };
            _context.Contacts.Attach(contact);
            _context.Contacts.Remove(contact);
            await _context.SaveChangesAsync();
        }

        public async Task<Contact?> GetContactByIdAsync(int id)
        {
            var contact = await _context.Contacts.Where(x => x.ContactId == id).FirstOrDefaultAsync();
            return contact;
        }

        public async Task<List<Contact>> GetContactsAsync()
        {
            var listContact = await _context.Contacts.ToListAsync();
            return listContact;
        }

        public async Task<List<Contact>> GetContactsByUserIdAsync(Guid userId)
        {
            var listContact = await _context.Contacts.Where(x => x.UserId == userId).Include(x => x.Categories).ToListAsync();
            return listContact;
        }

        public async Task UpdateContactAsync(Contact contact)
        {
            _context.Contacts.Update(contact);
            await _context.SaveChangesAsync();

        }
    }
}