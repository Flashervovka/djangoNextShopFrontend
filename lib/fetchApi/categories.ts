import { get } from '@/lib/fetchApi/utils';
import { ICategory, PaginatedResponse } from '@/models';

export const getCategories = () => get<PaginatedResponse<ICategory>>('categories/');
