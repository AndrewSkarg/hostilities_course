import Slider from "../components/Slider";
import { useSelector } from "react-redux";
import { getPosts } from '../features/post/postSlice'
import { useDispatch } from 'react-redux'
import { Dispatch } from "react";


const Home = () => {
    const dispatch: Dispatch<any> =useDispatch();
    dispatch(getPosts());

    const posts=useSelector((state:any)=>state.post.posts);
    console.log(posts);
    return <div className="w-full md:flex">
        <Slider posts={posts.slice(0, 10)}/>
    </div>

}
export default Home;