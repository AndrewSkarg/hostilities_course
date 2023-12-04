import { Link, useLoaderData } from "react-router-dom"
import axios from 'axios'
import data from '../features/post/apiText.json';

export const postsLoader = async () => {
    // const { data } = await axios.get('https://newsdata.io/api/1/news?apikey=pub_32127b0ae312632ea5408b8e93f0b22ba2331&q=war&country=ua&language=uk')
    return data.results;

}
const Posts = () => {
    const posts = useLoaderData() as any;

    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-black text-center text-2xl my-10'>
                Posts Page
            </h1>
            {
                posts.map((post:any, idx:number) => (<Link className='flex text-black py-2 px-4 bg-slate-700' key={idx} to={post.link}>
                    {post.source_id}<br />
                    {post.title}<br />
                    <img src={post.image_url} alt="" /><br />
                    {post.description}<br />
                </Link>))
            };


        </div>
    )
}
export default Posts
