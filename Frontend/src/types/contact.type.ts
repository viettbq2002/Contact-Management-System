import { Category } from "./category.type";

export type Contact = {
  contactId: number;
  userId: string;
  phone: string;
  fullName: string;
  companyName: string;
  email: string;
  nickname: string;
  hobby: string;
  isMarked: string;
  address: string;
  website: string;
  birthDate: string;
  position: string;
  note: string;
  categories: Category[];
};

export type ContactFormValue = {
  phone: string;
  fullName: string;
  companyName?: string;
  email?: string;
  nickname?: string;
  hobby?: string;
  isMarked?: string;
  address?: string;
  website?: string;
  birthDate?: string;
  position?: string;
  note?: string;
};
