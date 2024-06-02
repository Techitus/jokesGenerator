/* eslint-disable react/no-unescaped-entities */

import './App.css'

function App() {
  
  return (
    <>
    <div className="wrapper flex justify-between items-center  ml-44 mt-[10%]">
      <section className="component bg-black p-10 mx-1 md:mx-10 ">
    <h1 className="text-5xl font-bold text-center gredient-text"> Generate the Random Joke</h1>
		<blockquote className="relative text-white text-center p-10 w-full m-1">
			"It’s good to meet you, Dr. Banner. Your work on anti-electron collisions is unparalleled. And I’m a huge
			fan of the way you lose control and turn into an enormous green rage monster."
			
		</blockquote>
    <button className="btn text-center ml-[45%]">
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>

    <span className="text">Generate</span>
</button>
	</section>
  </div>
    </>
  )
}

export default App
