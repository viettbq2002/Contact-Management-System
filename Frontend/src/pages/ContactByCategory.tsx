import { Center, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import useCategoryDetail from "../hooks/useCategoryDetail";
import ContactCard from "../components/ui/ContactCard";

const ContactByCategory = () => {
  const { data } = useCategoryDetail();
  const contacts = data?.contacts || [];

  return (
    <div>
      <Stack mb={"lg"}>
        <Title order={2}>{data?.categoryName}</Title>
        <Text fs={"italic"} c="dimmed">
          {data?.description}
        </Text>
      </Stack>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }}>
        {contacts.map((contact) => (
          <ContactCard key={contact.contactId} contact={contact} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default ContactByCategory;
