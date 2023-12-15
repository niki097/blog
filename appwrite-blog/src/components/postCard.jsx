import React from "react";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${id}`}>
      <div className='w-full bg-gray-100 p-4 rounded-lg p-4'>
        <div className='w-full justify-center mb-4'>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title} className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
} b

export default PostCard;
