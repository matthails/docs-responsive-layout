import React from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

export function TopNav({ handleClick, children, navIsOpen  }) {

  return (
    // <nav className="bg-slate-200 w-full flex justify-between items-center border-b-[1px] border-b-slate-200 py-4 px-8  fixed z-10 top-0">
          <nav className="bg-slate-200 w-full flex justify-between items-center border-b-[1px] border-b-slate-200 py-4 px-8">
      <Link href="#"><a>Home</a></Link>
      <section className="gap-4 hidden md:flex">{children}</section>
      { navIsOpen ? 
      (
      <XIcon className="md:hidden h-5 w-5 hover:cursor-pointer" onClick={handleClick} />
      )
      :
      (
            <MenuIcon className="md:hidden h-5 w-5 hover:cursor-pointer" onClick={handleClick} />
      )
}
    </nav>
  );
}