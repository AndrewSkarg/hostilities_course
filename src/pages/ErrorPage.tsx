import { Link } from 'react-router-dom'
import img from '../assets/react.svg'
export default function ErrorPage() {
    return (
        <div className='min-h-screen bg-slate-900 font-robototext-white flex justify-center items-center flex-col gap-10'>
            <img src={img} alt='PageNotFoundImg' className='w-80' />
            <Link
                className='bg-sky-500 rounded-md px-6 py-2 hover: bg-sky-600'
                to='/'>
                Back
            </Link>
        </div>
    )
}