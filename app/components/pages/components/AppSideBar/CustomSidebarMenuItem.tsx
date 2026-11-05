import Image from 'next/image';
import Link from 'next/link';

import { SidebarMenuItem } from '@/components/ui/sidebar';
import { ICategory } from '@/models';

interface IProps {
  data: ICategory;
}

export const CustomSidebarMenuItem = ({ data }: IProps) => {
  const { slug, name, image } = data;

  return (
    <SidebarMenuItem>
      <Link
        href={`/category/${slug}`}
        className="hover:bg-muted flex w-full cursor-pointer items-center justify-start gap-3 border-b px-3 py-2 transition-colors"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
          <Image
            src={image}
            alt={name}
            width={40}
            height={40}
            className="h-full w-full object-contain"
            unoptimized
          />
        </div>
        <span className="font-medium">{name}</span>
      </Link>
    </SidebarMenuItem>
  );
};
