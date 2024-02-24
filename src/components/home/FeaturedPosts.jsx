import classes from './featured-posts.module.css';
import PostGridComponent from "@/components/posts/PostGrid";
export default function FeaturedPostsComponent({posts}){
    return <section className={classes.latest}>
        <h2>Featured Posts</h2>
        <PostGridComponent posts={posts}/>
    </section>
}