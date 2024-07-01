import { Contact } from "./contact.type";

export type Category = {
  categoryId: number;
  categoryName: string;
  description: string;
  contacts: Contact[];
};

export type CategoryFormValue = Omit<Category, "categoryId">;