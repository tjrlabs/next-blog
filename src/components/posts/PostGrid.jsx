import PostItemComponent from "@/components/posts/PostItem";
import classes from './post-grid.module.css';

export default function PostGridComponent({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItemComponent key={post.slug} post={post} />
      ))}
    </ul>
  );
}