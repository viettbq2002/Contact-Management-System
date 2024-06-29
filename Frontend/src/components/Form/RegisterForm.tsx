import { Button, Group, Paper, PasswordInput, Stack, TextInput } from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { RegisterFormValue } from "../../types/auth.type";
import { DatePickerInput } from "@mantine/dates";
import AuthApiRequest from "../../api/auth-api";
import toast from "react-hot-toast";
const RegisterForm = () => {
  const form = useForm<RegisterFormValue>({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },

    validate: {
      username: (value) => (/^(|[0-9]+)$/.test(value) ? "Your user name is invalid" : null),
      fullName: (value) => (/^(|[0-9]+)$/.test(value) ? "Please enter valid full name" : null),
      password: (value) => (value.length < 6 ? "Password must be at least 6 characters" : null),
      phone: hasLength({ min: 1 }, "Please enter a valid phone number"),
      confirmPassword: (value, values) => (value === values.password ? null : "Password did not match"),
    },
  });
  const handleSubmit = async (values: RegisterFormValue) => {
    try {
      const response = await AuthApiRequest.register(values);
      const { data } = response;
      toast.success(data.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log(e);
      toast.error(e.response.data.message);
    }
  };
  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput key={form.key("username")} {...form.getInputProps("username")} label="Username" placeholder="Enter your username" />
          <TextInput key={form.key("fullName")} {...form.getInputProps("fullName")} label="Full Name" placeholder="Enter your full name" />
          <TextInput key={form.key("phone")} {...form.getInputProps("phone")} label="Phone" placeholder="Enter your phone" />
          <TextInput key={form.key("address")} {...form.getInputProps("address")} label="Address" placeholder="Enter your address" />
          <DatePickerInput key={form.key("dob")} {...form.getInputProps("dob")} label="Birth" placeholder="Pick date" />
          <PasswordInput key={form.key("password")} {...form.getInputProps("password")} label="Password" placeholder="Your password" />
          <PasswordInput
            key={form.key("confirmPassword")}
            {...form.getInputProps("confirmPassword")}
            required
            label="Confirm Password"
            placeholder="Your password"
          />
          <Group justify="space-between" mt="lg"></Group>
        </Stack>

        <Button type="submit" fullWidth mt="xl">
          Sign in
        </Button>
      </form>
    </Paper>
  );
};

export default RegisterForm;
