import { getPosts } from "@/app/utils/utils";
import { Grid } from "@/once-ui/components";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  tag?: string;
}

export function Posts({ range, columns = "1", thumbnail = false, tag }: PostsProps) {
  let allBlogs = getPosts(["src", "app", "blog", "posts"]);

  // Sort blogs by publish date (newest first)
  const sortedBlogs = allBlogs.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  // Filter by tag if provided
  const filteredBlogs = tag 
    ? sortedBlogs.filter(blog => blog.metadata.tag === tag)
    : sortedBlogs;

  // Determine which blogs to display based on range
  const displayedBlogs = range
    ? filteredBlogs.slice(range[0] - 1, range.length === 2 ? range[1] : filteredBlogs.length)
    : filteredBlogs;

  // Set appropriate gap based on columns
  const gapSize = columns === "1" ? "l" : "m";

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid 
          columns={columns} 
          mobileColumns="1" 
          tabletColumns={columns === "3" ? "2" : columns} 
          fillWidth 
          marginBottom="40" 
          gap={gapSize}
        >
          {displayedBlogs.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} />
          ))}
        </Grid>
      )}
    </>
  );
}
