import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { CalendarIcon, ClockIcon, ComputerDesktopIcon, UsersIcon } from "@heroicons/react/24/outline";
function Sidebar() {

    const { data: session } = useSession();
    return ( 
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SideBarRow/>

        </div>
    )
}

export default Sidebar;