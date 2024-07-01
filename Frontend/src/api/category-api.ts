import http from "../lib/interceptor";
import { Category, CategoryFormValue } from "../types/category.type";

const categoryApi = {
  getCategories: async (userId: string) => {
    const response = await http.get<Category[]>(`/categories/${userId}`);
    return response.data;
  },
  getCategoyById: async (categoryId: number) => {
    const response = await http.get<Category>(`/categories/${categoryId}/details`);
    return response.data;
  },
  updateCategory: async (categoryId: number, category: CategoryFormValue) => {
    const response = await http.put<Category>(`/categories/${categoryId}`, category);
    return response.data;
  },

  deleteCategory: async (categoryId: number) => {
    const response = await http.delete<Category>(`/categories/${categoryId}`);
    return response.data;
  },
  createCategory: async (category: CategoryFormValue) => {
    const response = await http.post<Category>("/categories", category);
    return response.data;
  },
};
export default categoryApi;
