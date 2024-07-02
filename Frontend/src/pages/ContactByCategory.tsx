import { Button, Group, Modal, Select, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus, IconX } from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import categoryApi from "../api/category-api";
import ContactCard from "../components/ui/ContactCard";
import useCategoryDetail from "../hooks/useCategoryDetail";
import { useContactList } from "../hooks/useContact";

const ContactByCategory = () => {
  const { categoryId } = useParams();
  const { data } = useCategoryDetail(Number(categoryId));
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [opened, handlers] = useDisclosure(false);
  const [deletedOpened, deleteHandlers] = useDisclosure(false);
  const { data: contacts } = useContactList();
  const contactData = contacts || [];
  const filteredContacts = contactData.filter(
    (contact) => !data?.contacts.some((existingContact) => existingContact.contactId === contact.contactId)
  );
  const selectData = filteredContacts.map((contact) => ({
    value: contact.contactId.toString(),
    label: contact.fullName,
  }));
  const handleSelectChange = (contactId: string | null) => {
    if (contactId) {
      toast.promise(
        categoryApi.addContactToCategory(Number(categoryId), Number(contactId)).then(() => {
          queryClient.invalidateQueries({ queryKey: ["category-detail"] });
          handlers.close();
        }),
        {
          error: "Failed to add contact to category",
          loading: "Adding contact to category...",
          success: "Contact added successfully",
        }
      );
    }
  };
  const handleDeleteCategory = () => {
    toast.promise(
      categoryApi.deleteCategory(Number(categoryId)).then(() => {
        queryClient.invalidateQueries({ queryKey: ["category"] });
        navigate("/contacts");
      }),
      {
        error: "Failed to delete category",
        loading: "Deleting category...",
        success: "Category deleted successfully",
      }
    );
  };

  return (
    <div>
      <Stack mb={"lg"}>
        <Group align="center">
          <Title order={2}>{data?.categoryName}</Title>
          {opened && <Select onChange={(value) => handleSelectChange(value)} data={selectData} />}
          {opened ? (
            <Button rightSection={<IconX />} color="red" onClick={handlers.close}>
              Close
            </Button>
          ) : (
            <Button onClick={handlers.open} rightSection={<IconPlus />} color="green">
              Add Contact
            </Button>
          )}
        </Group>
        <Text fs={"italic"} c="dimmed">
          {data?.description}
        </Text>
      </Stack>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }}>
        {data?.contacts.map((contact) => (
          <ContactCard key={contact.contactId} contact={contact} />
        ))}
      </SimpleGrid>
      {data?.contacts.length === 0 && (
        <Text fs={"italic"} c="dimmed">
          No contact in this category
        </Text>
      )}
      <Button onClick={deleteHandlers.open} color="red" mt="xl">
        Remove this category
      </Button>
      <Modal title="Delete Category confirmation" opened={deletedOpened} onClose={deleteHandlers.close}>
        <Title order={3}>Are you sure you want to delete this category?</Title>
        <Group justify="flex-end" mt="xl">
          <Button color="red" onClick={handleDeleteCategory}>
            Delete
          </Button>
          <Button onClick={deleteHandlers.close}>Cancel</Button>
        </Group>
      </Modal>
    </div>
  );
};

export default ContactByCategory;
