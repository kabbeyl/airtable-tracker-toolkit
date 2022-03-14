import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
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

const TableOfContents = ({ index = null }) => {
  return (
    <>
      {index < pages.length && (
        <section className="flex items-center justify-between py-2 px-3 mt-8">
          <div>
            {index > 0 && (
              <>
                <FontAwesomeIcon icon={faArrowLeft} className="h-4 mr-4" />
              <Link href={pages[index-1].href}>
                {pages[index - 1].name}
              </Link>
                </>
            )}
          </div>

          <div>
            {index < pages.length - 1 && (
              <>
              <Link href={pages[index+1].href}>
                {pages[index + 1].name}
              </Link>
                <FontAwesomeIcon icon={faArrowRight} className="h-4 ml-4" />
                </>
            )}
          </div>
        </section>
      )}
      <section className="px-4 py-4 mb-6 border-t-0">
        <h4>Table of contents</h4>
        <ol>
          {pages.map((page, ind) => (
            <li
              className={index === ind ? "font-bold my-1" : "my-1"}
              key={page.name}
            >
              <Link href={page.href}>{page.name}</Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default TableOfContents;
