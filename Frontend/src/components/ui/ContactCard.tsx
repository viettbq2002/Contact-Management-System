import { Avatar, Group, Paper, rem, Text } from "@mantine/core";
import { IconPhoneCall } from "@tabler/icons-react";
import { Contact } from "../../types/contact.type";
interface ContactCardProps {
  contact: Contact;
}
const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <Paper miw={rem(280)} shadow="md" radius={"md"} withBorder p="md">
      <Group wrap="nowrap">
        <Avatar color="blue" size={60} radius="md">
          {contact.fullName[0]}
        </Avatar>
        <div>
          <Text fz="lg" fw={500}>
            {contact.fullName}
          </Text>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1.1rem" style={{ color: "var(--mantine-color-gray-5)" }} />
            <Text fz="sm" c="dimmed">
              {contact.phone}
            </Text>
          </Group>
        </div>
      </Group>
    </Paper>
  );
};

export default ContactCard;
