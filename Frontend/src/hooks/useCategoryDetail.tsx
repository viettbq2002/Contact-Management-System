import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import categoryApi from "../api/category-api";

const useCategoryDetail = () => {
  const { categoryId } = useParams();
  return useQuery({
    queryKey: ["category-detail", categoryId],
    staleTime: Infinity,

    queryFn: () => categoryApi.getCategoyById(Number(categoryId)),
    enabled: !!categoryId,
  });
};

export default useCategoryDetail;
