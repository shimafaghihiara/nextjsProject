import React from 'react';
import axios from "axios";
import Link from "next/link"

const Posts = ({posts}) => {
    return (
        <div>
            <ul>

                    {
                        posts.map( post => <li key={post.id}> <Link href={"/posts/"+post.id}>{post.title}</Link></li>)
                    }

            </ul>

        </div>
    );
};



export async function getStaticProps(){
    const response=await axios.get("http://localhost:3000/posts")
    return{
        props:{
            posts:response.data,
        }
    }
};

export default Posts;