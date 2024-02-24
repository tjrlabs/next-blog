import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'posts');

export function getPostData(postIdentifier){
    const filename = postIdentifier.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, `${filename}.md`);
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileData);

    return {
        slug: filename.replace(/\.md$/, ''),
        ...data,
        content
    };
}

export function getAllPosts(){
    const postFiles = fs.readdirSync(postsDirectory);
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return allPosts;
}

export function getFeaturedPosts(){
    const allPosts = getAllPosts();
    return allPosts.filter(post => post.isFeatured);
}