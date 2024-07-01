import { Button, Group } from "@mantine/core";
import { Icon2fa, IconAddressBook, IconDatabaseImport, IconFingerprint, IconKey, IconLogout, IconPlus, IconSettings } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../../style/Sidebar.module.css";
import { getUser } from "../../utils/auth.utils";
import { UserButton } from "./UserButton";

const user = getUser();
if (!user) {
  window.location.href = "/login";
}
const data = [
  { link: `/contacts/${user?.id}`, label: "Contact", icon: IconAddressBook },
  { link: "/contacts/create", label: "Add Contact", icon: IconPlus },
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
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    navigate("/login");
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
