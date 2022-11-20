import React, { useState, useEffect } from "react";
import { data } from "../constants/states";
import { useRouter } from "next/router";
import Link from "next/link";
import BecomeAgentBtn from "../comps/BecomeAgentBtn";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

export default function Home({ content }) {
  const router = useRouter();
  const md = new MarkdownIt();
  const cc = md.render(content);
  const [user, setUser] = useState({
    email: "",
    name: "",
  });

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="thanksWrapper">
      <div className="content">
        <h1>Congratulations! </h1>
        <h3>You are now an agent.</h3>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const slug = "guide";
  const markdownWithMeta = fs.readFileSync(
    path.join("_md", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      content,
    },
  };
}
