//'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from '@/components/ui/sidebar';
import { ICategory } from '@/models';

import { CustomSidebarMenuItem } from './CustomSidebarMenuItem';

interface IProps {
  data: ICategory[];
}

export const AppSidebar = ({ data }: IProps) => {
  return (
    <Sidebar variant="inset">
      <SidebarHeader className="h-15">
        <div className="h-[10px] pt-2">будет логотип</div>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-[90vh]">
          <SidebarMenu>
            {data.map((item) => (
              <CustomSidebarMenuItem key={item.id} data={item} />
            ))}
          </SidebarMenu>
        </ScrollArea>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
};
