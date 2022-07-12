import React, { SVGProps } from 'react';

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  onClick?: () => {};
}

function SidebarRow({ Icon, title, onClick }: Props) {
  return (
    <div
      onClick={() => onClick?.()}
      className="flex items-center px-4 py-3 space-x-2 transition-all duration-200 rounded-full group max-w-fit hover:bg-gray-100"
    >
      <Icon className="w-6 h-6" />
      <p className="hidden text-base font-light md:inline-flex group-hover:text-twitter hover:cursor-pointer lg:text-xl">
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;
