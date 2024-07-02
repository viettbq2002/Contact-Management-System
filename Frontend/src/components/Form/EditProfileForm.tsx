import { Box, Button, Stack, TextInput, Title } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

const EditProfileForm = () => {
  return (
    <Box w="70%">
      <Title>Profile</Title>
      <Stack>
        <TextInput variant="filled" label="Fullname" placeholder="Enter full name" />
        <TextInput variant="filled" label="Username" readOnly description="cannot be changed" />
        <TextInput variant="filled" label="Phone" placeholder="Enter phone" />
        <TextInput variant="filled" label="Address" placeholder="Enter address" />
        <DatePickerInput variant="filled" label="Birthday" placeholder="Enter birthday" />
      </Stack>
      <Button mt="xl">Change</Button>
    </Box>
  );
};

export default EditProfileForm;
