import Search from "./search"
import UserInfo from "./userInfo"


const Navbar = () => {

    return(
        <div className="bg-purple-600 flex p-5 items-center justify-between shadow-md ">
            <h1 className="text-5xl text-white font-bold">SHOP IT</h1>

            <Search></Search>

            <UserInfo></UserInfo>
        </div>
    )
}

export default Navbar