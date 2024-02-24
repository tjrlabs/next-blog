import ReactMarkdown from 'react-markdown';
import PostHeaderComponent from "@/components/posts/post-detail/PostHeader";
import classes from './post-content.module.css';


export default function PostContentComponent({post}) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeaderComponent title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

