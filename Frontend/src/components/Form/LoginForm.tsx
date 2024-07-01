import { Button, Group, Paper, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import AuthApiRequest from "../../api/auth-api";
import { LoginPayload } from "../../types/auth.type";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const form = useForm<LoginPayload>({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
      username: (value) => (/^(|[0-9]+)$/.test(value) ? "Your user name is invalid" : null),
      password: (value) => (value.length < 6 ? "Password must be at least 6 characters" : null),
    },
  });
  const handleLogin = async (payload: LoginPayload) => {
    try {
      const response = await AuthApiRequest.login(payload);
      const { data } = response;
      localStorage.setItem("authenticated", JSON.stringify(data));
      navigate(`/contacts/${data.id}`);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <form onSubmit={form.onSubmit(handleLogin)}>
        <TextInput key={form.key("username")} {...form.getInputProps("username")} label="Username" placeholder="you@mantine.dev" />
        <PasswordInput key={form.key("password")} {...form.getInputProps("password")} label="Password" placeholder="Your password" mt="md" />
        <Group justify="space-between" mt="lg"></Group>
        <Button type="submit" fullWidth mt="xl">
          Sign in
        </Button>
      </form>
    </Paper>
  );
};

export default LoginForm;
