import { Button, Stack, TextInput, Textarea } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import contactApi from "../../api/contact-api";
import { Contact, ContactFormValue } from "../../types/contact.type";
interface EditContactFormProps {
  contact: Contact | undefined;
}
const EditContactForm: React.FC<EditContactFormProps> = ({ contact }) => {
  const navigate = useNavigate();
  const form = useForm<ContactFormValue>({
    mode: "uncontrolled",
    initialValues: {
      fullName: contact?.fullName ?? "",
      phone: contact?.phone ?? "",
      address: contact?.address,
      companyName: contact?.companyName,
      email: contact?.email,
      hobby: contact?.hobby,
      nickname: contact?.nickname,
      note: contact?.note,
      position: contact?.position,
      website: contact?.website,
    },
    validate: {
      fullName: isNotEmpty("Please enter full name"),
      phone: isNotEmpty("Please enter phone number"),
    },
  });
  const handleSubmit = (values: ContactFormValue) => {
    toast.promise(
      contactApi.editContact(Number(contact?.contactId), values).then(() => {
        navigate(0);
      }),
      {
        error: "Failed to edit contact",
        loading: "Editing contact...",
        success: "Contact edited successfully",
      }
    );
  };
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="lg" w="100%">
        <TextInput
          key={form.key("fullName")}
          {...form.getInputProps("fullName")}
          variant="filled"
          label="Full Name"
          placeholder="enter full name"
          withAsterisk
        />
        <TextInput
          key={form.key("phone")}
          {...form.getInputProps("phone")}
          variant="filled"
          label="Phone Number"
          placeholder="enter phone number"
          withAsterisk
        />
        <TextInput
          key={form.key("companyName")}
          {...form.getInputProps("companyName")}
          variant="filled"
          label="Company"
          description="optional"
          placeholder="enter company name"
        />
        <TextInput
          key={form.key("email")}
          {...form.getInputProps("email")}
          variant="filled"
          label="email"
          description="optional"
          placeholder="enter email"
        />
        <TextInput
          key={form.key("nickname")}
          {...form.getInputProps("nickname")}
          variant="filled"
          label="Nickname"
          description="optional"
          placeholder="enter nickname"
        />
        <TextInput
          key={form.key("hobby")}
          {...form.getInputProps("hobby")}
          variant="filled"
          label="Hobby"
          description="optional"
          placeholder="enter hobby"
        />
        <TextInput
          key={form.key("address")}
          {...form.getInputProps("address")}
          variant="filled"
          label="Address"
          description="optional"
          placeholder="enter address"
        />
        <TextInput
          key={form.key("website")}
          {...form.getInputProps("website")}
          variant="filled"
          label="Website"
          description="optional"
          placeholder="enter website"
        />
        <TextInput
          key={form.key("position")}
          {...form.getInputProps("position")}
          variant="filled"
          label="Position"
          description="optional"
          placeholder="enter position"
        />
        <Textarea
          key={form.key("note")}
          {...form.getInputProps("note")}
          variant="filled"
          label="Note"
          description="optional"
          placeholder="enter note"
        />
        <Button color="orange" type="submit">
          Save
        </Button>
      </Stack>
    </form>
  );
};

export default EditContactForm;
