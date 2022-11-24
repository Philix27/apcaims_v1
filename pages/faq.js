import React, { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

export default function Guide({ content }) {
  const md = new MarkdownIt();
  const cc = md.render(content);
  return (
    <div>
      <div className="guide">
        <div className="markdown-section">
          <div dangerouslySetInnerHTML={{ __html: cc }}></div>
          {/* <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div> */}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const slug = "faq";
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
