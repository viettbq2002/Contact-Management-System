import { Button, Stack, Textarea, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { ContactFormValue } from "../../types/contact.type";

const CreateContactForm = () => {
  const form = useForm<ContactFormValue>({
    mode: "uncontrolled",
    initialValues: {
      fullName: "",
      phone: "",
    },
    validate: {
      fullName: isNotEmpty("Please enter full name"),
      phone: isNotEmpty("Please enter phone number"),
    },
  });
  return (
    <form onSubmit={form.onSubmit(console.log)}>
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
          key={form.key("company")}
          {...form.getInputProps("company")}
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
        <DatePickerInput
          key={form.key("birthDate")}
          {...form.getInputProps("birthDate")}
          variant="filled"
          label="Birth Date"
          description="optional"
          placeholder="enter birth date"
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
        <Button type="submit">Add</Button>
      </Stack>
    </form>
  );
};

export default CreateContactForm;
