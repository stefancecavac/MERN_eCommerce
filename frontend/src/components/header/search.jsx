

const Search = () => {

    return (
        <div className="flex items-center w-4/12 relative">
            <input className="border-2 rounded-full p-2 w-full outline-none  " type="search" placeholder="e.g. Samusung TV"></input>
            <button className="absolute right-0 top-0  p-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                className="text-purple-600 font-bold w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </button>
        </div>
    )
}

export default Search