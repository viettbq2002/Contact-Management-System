import http from "../lib/interceptor";
import { Contact, ContactFormValue } from "../types/contact.type";

const contactApi = {
  getContacts: async (userId: string) => {
    const response = await http.get<Contact[]>(`/contacts/${userId}`);
    return response.data;
  },
  createContact: async (contact: ContactFormValue) => {
    const response = await http.post<Contact>("/contacts", contact);
    return response.data;
  },
  getContact: async (contactId: number) => {
    const response = await http.get<Contact>(`/contacts/${contactId}/details`);
    return response.data;
  },
  deleteContact: async (contactId: number) => {
    const response = await http.delete<Contact>(`/contacts/${contactId}`);
    return response.data;
  },
  editContact: async (contactId: number, contact: ContactFormValue) => {
    const response = await http.put<Contact>(`/contacts/${contactId}`, contact);
    return response.data;
  },
};
export default contactApi;
