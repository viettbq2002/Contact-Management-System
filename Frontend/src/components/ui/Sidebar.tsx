import { Button, Group } from "@mantine/core";
import { IconAddressBook, IconLogout, IconSettings, IconTableAlias } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import classes from "../../style/Sidebar.module.css";
import NavLinkGroup from "./NavbarLinkGroup";
import { UserButton } from "./UserButton";

interface SidebarProps {
  handleClose: () => void;
}

export function Sidebar({ handleClose }: Readonly<SidebarProps>) {
  const data = [
    { link: `/contacts`, label: "All contacts", icon: IconAddressBook },
    { link: "/table", label: "Advanced Filters", icon: IconTableAlias },
    { link: "", label: "Other Settings", icon: IconSettings },
  ];
  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    window.location.href = "/";
  };

  const links = data.map((item) => (
    <Link to={item.link} className={classes.link} key={item.label}>
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header}>
          <UserButton />
        </Group>
        <NavLinkGroup />
        {links}
        <Button hiddenFrom="sm" onClick={handleClose} fullWidth mt="md">
          Close
        </Button>
      </div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
