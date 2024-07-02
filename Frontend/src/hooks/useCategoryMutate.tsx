import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import categoryApi from "../api/category-api";
import { CategoryFormValue } from "../types/category.type";

const useCategoryMutate = () => {
  const queryClient = useQueryClient();
  const categoriesQueryKey = ["category"];

  const createCategory = (category: CategoryFormValue) => {
    toast.promise(
      categoryApi.createCategory(category).then(() =>
        queryClient.invalidateQueries({
          queryKey: categoriesQueryKey,
        })
      ),
      {
        loading: "Creating category...",
        success: "Category created successfully",
        error: "Failed to create category",
      }
    );
  };
  const editCategory = (categoryId: number, category: CategoryFormValue) => {
    toast.promise(
      categoryApi.updateCategory(categoryId, category).then(() =>
        queryClient.invalidateQueries({
          queryKey: categoriesQueryKey,
        })
      ),
      {
        loading: "Editing category...",
        success: "Category edited successfully",
        error: "Failed to edit category",
      }
    );
  };
  return { createCategory, editCategory };
};

export default useCategoryMutate;
