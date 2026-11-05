'use client';

export default function CategoriesError({ reset }: { reset: () => void }) {
  return (
    <div>
      <p>Не удалось загрузить категории</p>
      <button onClick={reset}>Попробовать снова</button>
    </div>
  );
}
