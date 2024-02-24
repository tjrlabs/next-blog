import classes from './all-posts.module.css';
import PostGridComponent from "@/components/posts/PostGrid";
export default function AllPostsComponent({posts}){
    return <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostGridComponent posts={posts}/>
    </section>
}