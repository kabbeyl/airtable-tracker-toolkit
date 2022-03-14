import Link from 'next/link'
import React from 'react';
export const pages = [
  {
    name: "What's in this guide?",
    href: "/guide/whats-in-this-guide",
  },
  {
    name: "What is a news app?",
    href: "/guide/what-is-a-news-app",
  },
  {
    name: "Initial questions to ask",
    href: "/guide/initial-questions-to-ask",
  },
  {
    name: "Starting with the data",
    href: "/guide/starting-with-the-data",
  },
  {
    name: "Airtable basics",
    href: "/guide/airtable-basics",
  },
  {
    name: "Setting up and using your base",
    href: "/guide/setting-up-and-using-your-base",
  },
  {
    name: "Setting up the site",
    href: "/guide/setting-up-the-site",
  },
  {
    name: "Customizing the site",
    href: "/guide/customizing-the-site",
  },
  {
    name: "Publishing the site",
    href: "/guide/publishing-the-site",
  },
];

const TableOfContents = ({ index=null }) => {
  return (
    <section className="p-3 my-6">
      <h4 className="mb-3">Table of contents</h4>
      <ol>
        {pages.map((page, ind) => (
          <li className={index === ind ? "font-bold my-1" : "my-1"}>
            <Link href={page.href}>{page.name}</Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default TableOfContents;
