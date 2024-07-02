import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import categoryApi from "../api/category-api";
import { CategoryFormValue } from "../types/category.type";

const useCategoryMutate = () => {
  const queryClient = useQueryClient();
  const categoriesQueryKey = ["category"];

  //   const categoryQueryKey = ["category-detail"];
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
  return { createCategory };
};

export default useCategoryMutate;
