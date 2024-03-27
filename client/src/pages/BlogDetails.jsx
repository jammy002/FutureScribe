import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { FaPlay, FaStop, FaShare } from 'react-icons/fa';
import { PopularPost, PopularWriter, PostComments } from "../components";
import useStore from "../store";
import { getSinglePost } from "../utils/apiCalls";
import { usePopularPosts } from "../hooks/post-hook";

const BlogDetails = () => {
  const { setIsLoading } = useStore();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isReading, setIsReading] = useState(false);
  const popular = usePopularPosts();

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const data = await getSinglePost(id);
      setPost(data || {});
      setIsLoading(false);
    };
    if (id) {
      fetchPost();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [id, setIsLoading]);

  const toggleReading = () => {
    setIsReading(!isReading);
    if (!isReading) {
      readText(post?.desc);
    } else {
      stopReading();
    }
  };

  const readText = (text, lang) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = lang; // Set the language code for the desired language
    window.speechSynthesis.speak(speech);
  };

  const stopReading = () => {
    window.speechSynthesis.cancel();
  };

  const shareBlog = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.desc,
          url: window.location.href
        });
        console.log("Shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {

      console.log("Web Share API not supported, implement fallback sharing method here.");
      
    }
  };

  if (!post) {
    return (
      <div className='w-full h-full py-8 flex items-center justify-center'>
        <span className='text-xl text-slate-500'>Loading...</span>
      </div>
    );
  }

  return (
    <div className='w-full px-0 md:px-10 py-8 2xl:px-20'>
      <div className='w-full flex flex-col-reverse md:flex-row gap-2 gap-y-5 items-center'>
        <div className='w-full md:w-1/2 flex flex-col gap-8'>
          <h1 className='text-3xl md:text-5xl font-bold text-slate-800 dark:text-white'>
            {post?.title}
          </h1>
          <div className='w-full flex items-center '>
            <span className='flex-1 text-rose-600 font-semibold'>
              {post?.cat}
            </span>
            <span className='flex flex-1 items-baseline text-2xl font-medium text-slate-700 dark:text-gray-400'>
              {post?.views?.length || 0}
              <span className='text-base text-rose-600'>Views</span>
            </span>
          </div>
          <div className='mt-4 mb-4 flex'>
            <Link to={`/writer/${post?.user?._id}`} className='flex gap-5 w-1/2'>
              <img
                src={post?.user?.image}
                alt={post?.user?.name}
                className='object-cover w-12 h-12  rounded-full'
              />
              <div className=''>
                <p className='text-slate-800 dark:text-white font-medium'>
                  {post?.user?.name}
                </p>
                <span className='text-slate-600'>
                  {new Date(post?.createdAt).toDateString()}
                </span>
              </div>
            </Link>
            <div className='flex items-center gap-5'>
              <button onClick={toggleReading} className='flex items-center cursor-pointer'>
                {isReading ? <FaStop className='text-red-500' /> : <FaPlay className='text-green-500' />}
                <p className='ml-2 text-sm text-white'>{isReading ? 'Stop Reading' : 'Read Aloud'}</p>
              </button>
              <button onClick={shareBlog} className='flex items-center cursor-pointer'>
                <FaShare className='text-blue-500' />
                <p className='ml-2 text-sm text-white'>Share</p> 
              </button>
            </div>
          </div>
        </div>
        <img
          src={post?.img}
          alt={post?.title}
          className='w-full md:w-1/2 h-auto md:h-[360px] 2xl:h-[460px] rounded object-contain'
        />
      </div>
      <div className='w-full flex flex-col md:flex-row gapx-10 2xl:gap-x-28 mt-10'>
        <div className='w-full md:w-2/3 flex flex-col text-black dark:text-gray-500'>
          {post?.desc && (
            <Markdown
              options={{ wrapper: "article" }}
              className='leading-[3rem] text-base 2xl:text-[20px]'
            >
              {post?.desc}
            </Markdown>
          )}
          <div className='w-full'>
            <PostComments postId={id} />
          </div>
        </div>
        <div className='w-full md:w-1/4 flex flex-col gap-y-12'>
          <PopularPost posts={popular?.posts} />
          <PopularWriter data={popular?.writers} />
        </div>
      </div>
    </div>
  );
};
  
export default BlogDetails;