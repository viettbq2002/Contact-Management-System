import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "../components/ui/Sidebar";
import { getUser } from "../utils/auth.utils";

const LoginedLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const user = getUser();

  if (!user) {
    return <Navigate to={"/login"} />;
  }

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
