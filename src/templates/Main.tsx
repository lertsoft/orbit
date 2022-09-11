import { ReactNode } from 'react';

import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

// NAVBAR
const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-xl">
      {/* <div className="border-b border-gray-300">  */}
      <div className="pt-16 pb-8">
        <div className="text-3xl font-bold text-gray-900">
          {AppConfig.title}
        </div>
        <div className="text-xl">{AppConfig.description}</div>
      </div>
      <div>
        <ul className="flex flex-wrap text-lg">
          <li className="mr-10 text-center">
            <Link href="/">
              <a className="border-none text-center text-gray-700 hover:text-gray-900">
                Index
              </a>
            </Link>
          </li>
          <li className="mr-80 text-right">
            <Link href="/about/">
              <a className="border-none text-right text-gray-700 hover:text-gray-900">
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
      {/* </div> */}

      {/* Body of the App */}

      <div className=" inset-full">{props.children}</div>

      {/* FOOTER  */}
      <div className=" border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Created with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by <a href="https://www.ronnycoste.com">Ronny Coste</a>
      </div>
    </div>
  </div>
);

export { Main };
