import AllPostsComponent from "@/components/posts/AllPosts";
import {getAllPosts} from "@/lib/posts-util";

export default function AllPostsPage(){
    const posts = getAllPosts();
    return <AllPostsComponent posts={posts}/>
}