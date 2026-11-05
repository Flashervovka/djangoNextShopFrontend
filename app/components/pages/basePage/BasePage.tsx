'use client';

import { useEffect, useState } from 'react';

interface ICategory {
  id: number;
  name: string;
  slug: string;
  image?: string;
}

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export const BasePage = () => {
  const [data, setData] = useState<PaginatedResponse<ICategory> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_API_URL
          ? `${process.env.NEXT_PUBLIC_API_URL}/api/categories/`
          : 'http://localhost:8000/api/categories/';

        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const result: PaginatedResponse<ICategory> = await res.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch'));
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []); // пустой массив зависимостей = запуск один раз при загрузке

  if (loading) return <div>Загрузка категорий…</div>;
  if (error) return <div className="text-red-500">Ошибка: {error.message}</div>;

  return (
    <div className="p-4">
      <h2>Категории</h2>
      {data?.map((cat) => (
        <div key={cat.id} className="mb-2">
          {cat.name} ({cat.slug})
        </div>
      ))}
    </div>
  );
};
