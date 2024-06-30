import { Avatar, Group, Paper, Text } from "@mantine/core";
import { IconPhoneCall } from "@tabler/icons-react";

const ContactCard = () => {
  return (
    <Paper shadow="md" withBorder p="md">
      <Group wrap="nowrap">
        <Avatar color="blue" size={60} radius="md">
          MD
        </Avatar>
        <div>
          <Text fz="lg" fw={500}>
            Robert Glassbreaker
          </Text>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1.1rem" style={{ color: "var(--mantine-color-gray-5)" }} />
            <Text fz="sm" c="dimmed">
              +11 (876) 890 56 23
            </Text>
          </Group>
        </div>
      </Group>
    </Paper>
  );
};

export default ContactCard;
