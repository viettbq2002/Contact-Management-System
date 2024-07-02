import { Modal, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAddressBook, IconPlus } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
import classes from "../../style/Sidebar.module.css";
import AddCategoryForm from "../Form/AddCategoryForm";

const NavLinkGroup = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { data, isLoading } = useCategory();
  const categories = data || [];

  const links = categories.map((category) => (
    <NavLink
      key={category.categoryId}
      fw="500"
      component={Link}
      to={`/category/${category.categoryId}`}
      label={category.categoryName}
      childrenOffset={28}
    />
  ));

  return (
    <>
      <NavLink fw="500" label="Category" leftSection={<IconAddressBook className={classes.linkIcon} stroke={1.5} />} childrenOffset={28}>
        {links}
        {isLoading && "Loading..."}
        <NavLink
          onClick={open}
          fw="500"
          component="button"
          label="Add Category"
          leftSection={<IconPlus className={classes.linkIcon} stroke={1.5} />}
          childrenOffset={28}
        />
      </NavLink>
      <Modal opened={opened} onClose={close} title="Authentication">
        <AddCategoryForm />
      </Modal>
    </>
  );
};

export default NavLinkGroup;
