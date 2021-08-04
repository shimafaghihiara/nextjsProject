import React,{useEffect,useState} from 'react';
import axios from 'axios';


const PostDetail = ({post}) => {
    console.log(post);

    const [comments,setComments]=useState([]);

//in hook useEffect raveshe csr ast
    useEffect(()=>{
        axios.get("http://localhost:3000/comments?postId0="+post.id)
            .then(res=>{
                console.log(res);
                setComments(res.data);
                }).catch(err=>{
                    console.log(err);
        });

    },[]);


    return (
        <div>
            <h1>{post.title}</h1>
            <h2>{post.desc}</h2>
          <hr/>
            <ul>
                {
                    comments.map((item, index)=><li key={index}><h3>{item.name}</h3><p>{item.descComment}</p></li>)
                }
            </ul>
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