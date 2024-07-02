import { Avatar, Button, Group, Modal, Stack, Text, Title } from "@mantine/core";
import { useContact } from "../../hooks/useContact";
import { useDisclosure } from "@mantine/hooks";
import toast from "react-hot-toast";
import contactApi from "../../api/contact-api";
import { useQueryClient } from "@tanstack/react-query";
import EditContactForm from "../Form/EditContactForm";
import dayjs from "dayjs";
interface ContactDetailProps {
  contactId: number | null;
  closeCallback: () => void;
}
const ContactDetail: React.FC<ContactDetailProps> = ({ contactId, closeCallback }) => {
  const [deletedOpened, deleteHandlers] = useDisclosure(false);
  const [editOpened, editHandlers] = useDisclosure(false);
  const { data } = useContact(Number(contactId));
  const queryClient = useQueryClient();
  const handleDeleteContact = () => {
    toast.promise(
      contactApi.deleteContact(Number(contactId)).then(() => {
        queryClient.invalidateQueries({ queryKey: ["contact"] });
        deleteHandlers.close();
        closeCallback();
      }),
      {
        error: "Failed to delete contact",
        loading: "Deleting contact...",
        success: "Contact deleted successfully",
      }
    );
  };
  return (
    <>
      <Stack px={"xl"}>
        {!editOpened ? (
          <>
            <Group justify="center">
              <Avatar name={data?.fullName} color="initials" size={"xl"} />
            </Group>
            <Group gap="xl">
              <Text c="dimmed">Full Name:</Text>
              <Text>{data?.fullName} </Text>
            </Group>
            <Group gap="xl">
              <Text c="dimmed">Nick Name:</Text>
              <Text fs={data?.nickname ? "normal" : "italic"}>{data?.nickname ?? "No information"}</Text>
            </Group>
            <Group gap="xl">
              <Text c="dimmed">Phone:</Text>
              <Text>{data?.phone} </Text>
            </Group>
            <Group gap="xl">
              <Text c="dimmed">Address:</Text>
              <Text fs={data?.address ? "normal" : "italic"}>{data?.address ?? "No information"}</Text>
            </Group>
            <Group gap="xl">
              <Text c="dimmed">Birth date:</Text>
              <Text fs={data?.birthDate ? "normal" : "italic"}>
                {dayjs(new Date(data?.birthDate ?? "")).format("DD/MM/YYYY") ?? "No information"}
              </Text>
            </Group>
            <Group gap="xl">
              <Text c="dimmed">Company:</Text>
              <Text fs={data?.companyName ? "normal" : "italic"}>{data?.companyName ?? "No information"}</Text>
            </Group>
            <Group gap="xl">
              <Text c="dimmed">Position:</Text>
              <Text fs={data?.position ? "normal" : "italic"}>{data?.position ?? "No information"}</Text>
            </Group>
            <Group gap="xl">
              <Text c="dimmed">Hobby:</Text>
              <Text fs={data?.hobby ? "normal" : "italic"}>{data?.hobby ?? "No information"}</Text>
            </Group>
            <Group gap="xl">
              <Text c="dimmed">Note:</Text>
              <Text>{data?.note} </Text>
            </Group>
            <Group gap="xl">
              <Text c="dimmed">Website:</Text>
              <Text fs={data?.website ? "normal" : "italic"}>{data?.website || "No information"} </Text>
            </Group>
          </>
        ) : (
          <EditContactForm contact={data} />
        )}
        <Group>
          {!editOpened ? (
            <Button onClick={editHandlers.open} color="orange">
              Edit
            </Button>
          ) : (
            <Button onClick={editHandlers.close}>Go back</Button>
          )}
          <Button onClick={deleteHandlers.open} color="red" variant="subtle">
            Delete
          </Button>
        </Group>
      </Stack>
      <Modal title="Delete Contact" opened={deletedOpened} onClose={deleteHandlers.close}>
        <Title order={3}>Are you sure you want to delete this contact?</Title>
        <Group mt="lg">
          <Button onClick={handleDeleteContact} color="red">
            Delete
          </Button>
          <Button onClick={deleteHandlers.close}>Cancel</Button>
        </Group>
      </Modal>
    </>
  );
};

export default ContactDetail;
