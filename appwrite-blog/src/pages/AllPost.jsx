import React, { useState } from 'react'
import {Container, PostCard} from "../components"
import Service from '../appwrite/config'
export const AllPost=()=>{
    const [posts, setPosts]=useState([])
 Service.getPosts.then((posts)=>{
    if(posts){
        setPosts(post.documents)
    }
 })
    return (
    <div className='w-full py-8'>
       <Container>
        <div className='flex flex-wrap'>
        {posts.map((post)=>{
           <div key={post.$id} className='px-2'>
            <postCard post={post}/>
            </div>
        })}
        </div>
       
        </Container> 
    </div>
  )
}

export default AllPost