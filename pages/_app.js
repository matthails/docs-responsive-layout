import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {  SideNav, TopNav } from '../components';
import '../styles/globals.css';
 
function MyApp({ Component, pageProps }) {
  let [navIsOpen, setNavIsOpen] = React.useState(false)
 
  console.log(navIsOpen)
 
  return (
    <>
      <Head>
        <title>Docs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content="Markdocs Starter Rebuild" />
        <meta
          name="description"
          content="Built from the ground up for educational purposes"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
   <TopNav navIsOpen={navIsOpen} handleClick={() => setNavIsOpen(!navIsOpen)}>
      <ul className="flex gap-8">
        <li><Link href="#"><a>Link 1</a></Link></li>
        <li><Link href="#"><a>Link 2</a></Link></li>
        </ul>
      </TopNav>
 { navIsOpen && <SideNav /> }
      <main>
          <article>
            <Component {...pageProps} />
          </article>
         </main>
    </>
  );
}
 
export default MyApp


