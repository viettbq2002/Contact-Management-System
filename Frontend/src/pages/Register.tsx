import { Anchor, Container, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import RegisterForm from "../components/Form/RegisterForm";

const Register = () => {
  return (
    <Container size={"sm"}>
      <Title ta="center" fw={900}>
        Create new account
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?
        <Anchor size="sm" component={Link} to={"/login"}>
          Login
        </Anchor>
      </Text>
      <RegisterForm />
    </Container>
  );
};

export default Register;
