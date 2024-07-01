import { useQuery } from "@tanstack/react-query";
import contactApi from "../api/contact-api";
import { getUser } from "../utils/auth.utils";

const useContact = () => {
  const user = getUser();
  return useQuery({
    queryKey: ["contact"],
    staleTime: Infinity,
    queryFn: () => contactApi.getContacts(user?.id as string),
    enabled: !!user?.id,
  });
};

export default useContact;
