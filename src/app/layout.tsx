"use client";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks-web";
import Footer from "./Footer";
import "./globals.css";

import Header from "./Header";

const searchClient = algoliasearch(
  "UX5N540DI3",
  "a98e4725fa46b4bb4671790deadbb0e8"
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="h-full">
        <InstantSearch indexName="poc_events_app" searchClient={searchClient}>
          <div className="flex flex-col bg-white h-full">
            <Header />
            <div className="my-16 z-10">{children}</div>
            <div className="fixed top-16 w-full h-screen bg-[url('/hero.svg')] bg-contain bg-no-repeat bg-top"></div>
            <Footer />
          </div>
        </InstantSearch>
      </body>
    </html>
  );
}

