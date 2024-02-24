import PostContentComponent from "@/components/posts/post-detail/PostContent";
import {getPostData} from "@/lib/posts-util";

export default function PostDetailPage({params}){
    const postData = getPostData(params.slug);
    return <PostContentComponent post={postData}/>
}