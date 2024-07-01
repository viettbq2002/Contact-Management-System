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
};
export default contactApi;
