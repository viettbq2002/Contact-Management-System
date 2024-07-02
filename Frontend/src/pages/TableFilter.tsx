import { Box } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css"; //if using mantine date picker features
import { MantineReactTable, useMantineReactTable, type MRT_ColumnDef } from "mantine-react-table";
import "mantine-react-table/styles.css"; //make sure MRT styles were imported in your app root (once)
import { useMemo } from "react";
import { useContactList } from "../hooks/useContact";
import { Contact } from "../types/contact.type";

//nested data is ok, see accessorKeys in ColumnDef below

const TableFilter = () => {
  const { data } = useContactList();
  const listContact = data || [];

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Contact>[]>(
    () => [
      {
        accessorKey: "fullName", //access nested data with dot notation
        header: "Full name",
      },
      {
        accessorKey: "phone",
        header: "Phone",
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
      },
      {
        accessorKey: "birthDate",
        header: "Birth Date",
      },
      {
        accessorKey: "note",
        header: "Note",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "website",
        header: "Website",
      },
      {
        accessorKey: "companyName",
        header: "Company",
      },
      {
        accessorKey: "position",
        header: "Position",
      },
      {
        accessorKey: "hobby",
        header: "Hobby",
      },
      {
        accessorKey: "nickname",
        header: "Nickname",
      },
      {
        accessorKey: "isMarked",
        header: "Is Marked",
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data: listContact, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <Box w="100%">
      <MantineReactTable table={table} />
    </Box>
  );
};

export default TableFilter;
