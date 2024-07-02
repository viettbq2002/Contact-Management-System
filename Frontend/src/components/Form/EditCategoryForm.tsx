import { Button, Stack, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import useCategoryDetail from "../../hooks/useCategoryDetail";
import useCategoryMutate from "../../hooks/useCategoryMutate";
import { CategoryFormValue } from "../../types/category.type";
interface EditCategoryFormProps {
  categoryId: number;
}
const EditCategoryForm: React.FC<EditCategoryFormProps> = ({ categoryId }) => {
  const { data } = useCategoryDetail(categoryId);
  const form = useForm<CategoryFormValue>({
    mode: "uncontrolled",
    initialValues: {
      description: data?.description,
      categoryName: data?.categoryName ?? "",
    },
  });
  const categoryMutation = useCategoryMutate();
  const { editCategory } = categoryMutation;

  return (
    <div>
      <form
        onSubmit={form.onSubmit((values) => {
          editCategory(categoryId, values);
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

export default EditCategoryForm;
