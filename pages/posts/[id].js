import React from 'react';
import axios from 'axios'

const PostDetail = ({post}) => {
    console.log(post);
    return (
        <div>
            <h1>{post.title}</h1>
            <h2>{post.desc}</h2>
            every things
        </div>
    );
};

export async function getStaticPaths(){
    const response=await axios.get("http://localhost:3000/posts");
    const paths=response.data.map(post=>`/posts/${post.id}`);
    return {
        paths,
        fallback:false
    }
};

export async function getStaticProps({params}){
    const response=await axios.get("http://localhost:3000/posts/"+params.id)
    return{
        props:{
            post:response.data,
        }
    }};





    export default PostDetail;