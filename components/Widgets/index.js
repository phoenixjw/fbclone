import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {EllipsisHorizontalIcon, VideoCameraIcon}  from "@heroicons/react/24/solid";
import Contact from "./Contact";

const contacts = [
    {src: "/Jeff.jpg", name: "Jeff Bezoz"},
    {src: "https://links.papareact.com/kxk", name: "Elon Musk"},
    {src: "https://links.papareact.com/zvy", name: "Bill Gates"},
    {src: "https://links.papareact.com/snf", name: "Mark Zuckerberg"},
    {src: "https://links.papareact.com/d0c", name: "Harry Potter"},

]
function Widgets() {
    return (
        <div className=" hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5"> 
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6"/>
                    <MagnifyingGlassIcon className="h-6"/>
                    <EllipsisHorizontalIcon className="h-6"/>
                </div>
            </div>
            
            {contacts.map(contact => (
        <Contact key={contact.src} name={contact.name} src={contact.src}/>
        ))}

            
        </div>
    )
}
export default Widgets