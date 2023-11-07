import Link from 'next/link'
import React from 'react'

const Home = () => {
    return (
        <div className='w-screen h-[100vh] flex justify-center items-center text-black gap-4'    >
            <Link className='w-24 h-14  font-bold text-3xl px-24 p-16 border-spacing-1 border-2  border-brown-200  flex justify-center items-center ' href="/midpoint" >V1</Link>
            <Link className='w-24 h-14  font-bold text-3xl px-24 p-16 border-spacing-1 border-2  border-brown-200  flex justify-center items-center' href="/midpoint/v2" >V2</Link>

        </div>
    )
}

export default Home