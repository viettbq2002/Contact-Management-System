using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BussinessLogic.Models;
using ContactManagementApi.DTO.Auth;
using ContactManagementApi.DTO.Category;
using ContactManagementApi.DTO.Contact;

namespace ContactManagementApi.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {

            CreateMap<RegisterRequest, User>().ReverseMap();
            CreateMap<LoginResponse, User>().ReverseMap();
            CreateMap<CreateContactRequest, Contact>().ReverseMap();
            CreateMap<ContactResponse, Contact>().ReverseMap();
            CreateMap<ContactCategoryResponse, Category>().ReverseMap();
            CreateMap<Category, ContactCategoryResponse>().ReverseMap();
            CreateMap<Category, CategoryResponse>().ReverseMap();
            CreateMap<Contact, CategoryContactResponse>().ReverseMap();
            CreateMap<Category, CreateCategoryRequest>().ReverseMap();
        }

    }
}