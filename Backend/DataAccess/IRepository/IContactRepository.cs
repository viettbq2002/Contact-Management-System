using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BussinessLogic.Models;

namespace DataAccess.IRepository
{
    public interface IContactRepository
    {
        Task CreateContactAsync(Contact contact);
        Task UpdateContactAsync(Contact contact);
        Task<List<Contact>> GetContactsAsync();
        Task<Contact> GetContactByIdAsync(Guid id);

        Task DeleteContactAsync(Contact contact);

        Task<List<Contact>> GetContactsByUserIdAsync(Guid userId);

    }
}