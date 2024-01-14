import { useSelector } from "react-redux";
import { getPosts } from '../features/post/postSlice'
import { useDispatch } from 'react-redux'
import { Dispatch } from "react";
import Slider from "../components/Slider";

const Home = () => {
    const dispatch: Dispatch<any> =useDispatch();
    dispatch(getPosts());

    const posts=useSelector((state:any)=>state.post.posts);
    console.log(posts);
    return <div className="home__container">
        {/* <Slider posts={posts}/> */}
        fddddddddddd
    </div>

}
export default Home;