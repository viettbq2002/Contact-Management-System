import { Button, Group, Modal, SimpleGrid, UnstyledButton } from "@mantine/core";
import ContactCard from "../components/ui/ContactCard";
import CreateContactForm from "../components/Form/CreateContactForm";
import { useDisclosure } from "@mantine/hooks";
import ContactDetail from "../components/ui/ContactDetail";
import { useState } from "react";
import { useContactList } from "../hooks/useContact";

const Contact = () => {
  const { data } = useContactList();
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const [contactOpend, { open: contactOpen, close: contactClose }] = useDisclosure(false);
  const contacts = data || [];
  return (
    <div>
      <Group pb="lg">
        <Button onClick={open}>Create Contact</Button>
        <Button color="ora">Create Category</Button>
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }}>
        {contacts.map((contact) => (
          <UnstyledButton
            onClick={() => {
              setSelectedContact(contact.contactId);
              contactOpen();
            }}
            key={contact.contactId}
          >
            <ContactCard contact={contact} />
          </UnstyledButton>
        ))}
      </SimpleGrid>
      <Modal size="100%" opened={opened} onClose={close} title="Create Contact">
        <CreateContactForm />
      </Modal>
      <Modal size="xl" title="Contact Detail" opened={contactOpend} onClose={contactClose}>
        <ContactDetail contactId={selectedContact} />
      </Modal>
    </div>
  );
};

export default Contact;
