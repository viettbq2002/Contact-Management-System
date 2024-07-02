import { Button, Stack, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { CategoryFormValue } from "../../types/category.type";
import useCategoryMutate from "../../hooks/useCategoryMutate";

const AddCategoryForm = () => {
  const form = useForm<CategoryFormValue>({
    mode: "uncontrolled",
    initialValues: {
      description: "",
      categoryName: "",
    },
  });
  const categoryMutation = useCategoryMutate();
  const { createCategory } = categoryMutation;

  return (
    <div>
      <form
        onSubmit={form.onSubmit((values) => {
          createCategory(values);
          form.reset();
        })}
      >
        <Stack gap="lg">
          <TextInput
            label="Category Name"
            withAsterisk
            placeholder="Enter category name"
            {...form.getInputProps("categoryName")}
            key={form.key("categoryName")}
          />
          <Textarea
            label="Description"
            description="optional"
            placeholder="Enter description"
            {...form.getInputProps("description")}
            key={form.key("description")}
          />
          <Button type="submit" fullWidth color="orange">
            Add Category
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default AddCategoryForm;
