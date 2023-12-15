import React, { useState } from "react";
import appwriteService from "../conf/conf";
import { Container, PostCard } from "../components";
export const Home=()=> {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    }, []);
  });
  if (posts.length === 0) {
    return (
      <div className='flex flex-wrap'>
        <Container>
          <div className='w-full'>
            <div>
              <div className='py-3 w-full'>
                <h1 className='text-3xl'>Login to read posts</h1>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
    );
  }
  else{
    <div>
        <Container>
            <div>
                {posts.map((post) => (
                    <div key={post.$id}>
                        <PostCard {...post}/>
                    </div>
                ))}

            </div>
        </Container>
    </div>
  }
}

export default Home;
