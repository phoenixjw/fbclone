import Image from "next/image"
function Header() {
    return(
        <div>
            {/* Header left */}
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me" 
                 width={40}
                 height={40} 
                 />
                 <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                 className="w-6 h-6 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

                    <input 
                    className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500" 
                    type="text" 
                    placeholder="Search Facebook" />

                 </div>
            </div>
            {/* Header center */}
            {/* Header right */}
        </div>
    )
}

export default Header