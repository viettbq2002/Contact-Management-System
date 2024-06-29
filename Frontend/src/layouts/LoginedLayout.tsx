import { AppShell, Burger, Group } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/ui/Sidebar";
import { useDisclosure } from "@mantine/hooks";

const LoginedLayout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }} padding="md">
      <AppShell.Navbar>
        <Sidebar handleClose={toggle} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Outlet />
        </Group>
      </AppShell.Main>
    </AppShell>
  );
};

export default LoginedLayout;
