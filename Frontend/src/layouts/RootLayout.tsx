import { AppShell, Burger, Group, Image, Text, UnstyledButton } from "@mantine/core";
import { Link, Navigate, Outlet } from "react-router-dom";
import classes from "../style/Navbar.module.css";
import { useDisclosure } from "@mantine/hooks";
import { getUser } from "../utils/auth.utils";

const RootLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const user = getUser();
  if (user) return <Navigate to={"/contacts"} />;
  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: "sm", collapsed: { desktop: true, mobile: !opened } }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group>
              <Image src={"/contact-book-svgrepo-com.svg"} height={40} width={40} />
              <Text component={Link} to={"/"} fw={"bold"} size={"lg"}>
                Contact Managment
              </Text>
            </Group>
            <Group ml="xl" gap={0} visibleFrom="sm">
              <UnstyledButton component={Link} to={"/login"} className={classes.control}>
                Login
              </UnstyledButton>
              <UnstyledButton component={Link} to={"/register"} className={classes.control}>
                Register
              </UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={classes.control}>Login</UnstyledButton>
        <UnstyledButton className={classes.control}>Register</UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default RootLayout;
