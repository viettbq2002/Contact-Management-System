import { Button, Group } from "@mantine/core";
import { Icon2fa, IconAddressBook, IconDatabaseImport, IconFingerprint, IconKey, IconLogout, IconReceipt2, IconSettings } from "@tabler/icons-react";
import { useState } from "react";
import classes from "../../style/Sidebar.module.css";
import { UserButton } from "./UserButton";
import { useNavigate } from "react-router-dom";

const data = [
  { link: "", label: "Contact", icon: IconAddressBook },
  { link: "", label: "Add Contact", icon: IconReceipt2 },
  { link: "", label: "Advanced Filtering", icon: IconFingerprint },
  { link: "", label: "SSH Keys", icon: IconKey },
  { link: "", label: "Databases", icon: IconDatabaseImport },
  { link: "", label: "Authentication", icon: Icon2fa },
  { link: "", label: "Other Settings", icon: IconSettings },
];
interface SidebarProps {
  handleClose: () => void;
}

export function Sidebar({ handleClose }: SidebarProps) {
  const [active, setActive] = useState("Billing");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    navigate("/login");
  };

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header}>
          <UserButton />
        </Group>

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
