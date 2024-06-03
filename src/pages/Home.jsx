/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from 'react-redux'
import './Home.css'
import { useEffect } from 'react'
import { fetchJoke } from '../../store/jokesSlice'
const Home = () => {
    const {jokes} = useSelector(state => state.jokes)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchJoke())
    },[])
    const nextJoke = ()=>{
        dispatch(fetchJoke())
    }
  return (
    <>
    <div className=" flex justify-between items-center  absolute mt-[12%] w-[60%] ml-[27%]">
      <div className=" wrapper component p-10 mx-1 md:mx-10  w-[70%]">
    <h1 className="text-5xl font-bold text-center gredient-text"> Generate the Random Joke</h1>
		<blockquote className="relative text-white text-center p-10  m-1">
			"{jokes?.setup} <span className="text-[#00ff00]">"{jokes?.delivery}"</span>"	
		</blockquote>
    <button onClick={nextJoke} className="btn text-center ml-[45%]">
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>

    <span className="text">Generate</span>
</button>
	</div>
  </div>
    </>
  )
}

export default Home