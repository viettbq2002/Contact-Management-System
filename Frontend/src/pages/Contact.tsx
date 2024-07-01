import { Button, Group, SimpleGrid } from "@mantine/core";
import ContactCard from "../components/ui/ContactCard";

const Contact = () => {
  return (
    <div>
      <Group pb="lg">
        <Button>Create Contact</Button>
        <Button>Create Category</Button>
      </Group>
      <SimpleGrid cols={{ sm: 2, md: 3, lg: 4 }}>
        <ContactCard />
      </SimpleGrid>
    </div>
  );
};

export default Contact;
