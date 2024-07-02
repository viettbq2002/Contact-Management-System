import { useQuery } from "@tanstack/react-query";
import contactApi from "../api/contact-api";
import { getUser } from "../utils/auth.utils";

export const useContactList = () => {
  const user = getUser();
  return useQuery({
    queryKey: ["contact"],
    staleTime: Infinity,
    queryFn: () => contactApi.getContacts(user?.id as string),
    enabled: !!user?.id,
  });
};

export const useContact = (contactId: number) => {
  return useQuery({
    queryKey: ["contact-detail", contactId],
    staleTime: Infinity,
    queryFn: () => contactApi.getContact(contactId),
  });
};
