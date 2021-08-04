import React from 'react';
import axios from "axios";
import Link from "next/link"

const NewPosts = ({posts}) => {
    console.log(posts)
    return (
        <div>
            <h1>hello</h1>
            <ul>
                {
                    posts.map ( post => <li key={post.id}> <Link href={"/posts/"+post.id}>{post.title}</Link></li>)
                }
            </ul>

        </div>
    );
};


export async function getServerSideProps(){
    const response=await axios.get("http://localhost:3000/posts")
    return {
        props:{
            posts: response.data
        }
    }
}

export default NewPosts;