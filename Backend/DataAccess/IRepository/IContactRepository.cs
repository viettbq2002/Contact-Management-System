using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessLogic.Models;

namespace DataAccess.IRepository
{
    public interface IContactRepository
    {
        Task<Contact> CreateContactAsync(Contact contact);
        Task UpdateContactAsync(Contact contact);
        Task<List<Contact>> GetContactsAsync();
        Task<Contact?> GetContactByIdAsync(int id);

        Task DeleteContactAsync(int contactId);

        Task<List<Contact>> GetContactsByUserIdAsync(Guid userId);
        Task<List<Contact>> GetContactsByCategoryIdAsync(int categoryId);

    }
}