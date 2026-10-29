import { AppSidebar } from '@/app/components/pages/components';
import { SidebarTrigger } from '@/components/ui/sidebar';

export const BasePage = () => {
  return (
    <div className="flex h-full min-h-screen flex-col md:flex-row">
      <AppSidebar />

      <main className="flex-1 bg-green-700 p-6">
        <header className="flex items-center justify-between border-b pb-4">
          {/* Кнопка-триггер: видна только на мобильных */}
          <SidebarTrigger className="md:hidden" />

          <span className="text-lg font-medium">text in header</span>
        </header>

        <div className="mt-6">
          <h2 className="mb-4 text-3xl leading-tight font-bold">Article Title Here</h2>
        </div>

        <footer>
          <span className="text-xl font-semibold">Footer item here</span>
        </footer>
      </main>
    </div>
  );
};
