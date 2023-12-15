import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import {Button, Container} from "../components"
import parse from "html-react-parser"
import { useSelector } from 'react-redux'
export default function Post() {
    const[post, setPost]=useState(null);
    const {slug}=useParams();
    const navigate=useNavigate()
    const userData=useSelector((state)=>state.auth.userData);
    const isAuthor=post && userdata? post.userId===userData.$id:false;
    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
                else{
                    navigate("/")
                }
            }, [slug, navigate]);

            const deletePost=()=>{
                appwriteService.deletePost(post.$id).then((status)=>{
                    if(status){
                        appwriteService.deleteFile(post.featuredImage);
                        navigate("/")
                    }
                })
            }
        }
    })
  return post?(
    <div className='py-8'>
        <Container>
            <div className='flex flex-wrap justify-center'>
    <img src={appwriteService.getFilePreview
    (post.featuredImage)} alt={post.title} className='rounded-xl' />
            {isAuthor && (
                <div>
                    <Link>
                        <Button
                        onClick={deletePost}
                        >Edit</Button>
                    </Link>
                    <Button>Delete</Button>
                    </div>
            )
            }
            </div>
            <div>
                <h1 className='text-2xl font-bold'>{post.title}</h1>
            </div>
                <div className='browser-css'>
                    {parse(post.content)}
                </div>
        </Container>
    </div>
  ):null
}
