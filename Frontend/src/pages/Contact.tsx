import { Button, Group, Modal, SimpleGrid } from "@mantine/core";
import ContactCard from "../components/ui/ContactCard";
import useContact from "../hooks/useContact";
import CreateContactForm from "../components/Form/CreateContactForm";
import { useDisclosure } from "@mantine/hooks";

const Contact = () => {
  const { data } = useContact();
  const [opened, { open, close }] = useDisclosure(false);
  const contacts = data || [];
  return (
    <div>
      <Group pb="lg">
        <Button onClick={open}>Create Contact</Button>
        <Button color="ora">Create Category</Button>
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }}>
        {contacts.map((contact) => (
          <ContactCard key={contact.contactId} contact={contact} />
        ))}
      </SimpleGrid>
      <Modal size="100%" opened={opened} onClose={close} title="Create Contact">
        <CreateContactForm />
      </Modal>
    </div>
  );
};

export default Contact;
