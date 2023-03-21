import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { CalendarIcon, ClockIcon, ComputerDesktopIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import SideBarRow from "./SideBarRow";
function Sidebar() {

    const { data: session, status: loading } = useSession();
    return ( 
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
        <SideBarRow src={session.user.image} title={session.user.name} />

        <SideBarRow Icon={UsersIcon} title="Friends"/> 
        <SideBarRow Icon={UserGroupIcon} title="Groups"/>
        <SideBarRow Icon={ShoppingBagIcon} title="Marketplace"/>
        <SideBarRow Icon={ComputerDesktopIcon} title="Watch"/>
        <SideBarRow Icon={CalendarIcon} title="Events"/>
        <SideBarRow Icon={ClockIcon} title="Memories"/>
        <SideBarRow Icon={ChevronDownIcon} title="See More"/>
 
        </div>
    )
}

export default Sidebar;