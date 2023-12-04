import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, useEffect, useRef, useState, MutableRefObject } from 'react';
import { getPosts } from '../features/post/postSlice';
import { Post } from '../types';
const Gallery = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const posts = useSelector((state: any) => state.post.posts);

    useEffect(() => {
        dispatch(getPosts());

    }, []);
    // {
    //     posts.map((post: any, idx: number) => (<Link className='flex text-black py-2 px-4 bg-slate-700' key={idx} to={post.link}>
    //         {post.source_id}<br />
    //         {post.title}<br />
    //         <img src={post.image_url} alt="" /><br />
    //         {post.description}<br />
    //     </Link>))
    // };


    return <div className="text-black container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
            {posts.map((post: Post, idx: number) => (
                <div className="flex w-1/3 flex-wrap" key={idx}>
                    <div className="w-full p-1 md:p-2">
                        <img
                             alt={'Картинка відсутня, джерело '+post.source_id}
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={post.image_url}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>


}
export default Gallery;