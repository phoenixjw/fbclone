import Image from "next/image";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

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
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-600"/>
                    <input 
                    className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500" 
                    type="text" 
                    placeholder="Search Facebook" 
                    />

                 </div>
            </div>
            {/* Header center */}
            <div className="flex justify-center flex-grow">
                <div>
                    {/* <HeaderIcon Icon={HomeIcon}/> */}

                </div>

            </div>
            {/* Header right */}
        </div>
    )
}

export default Header