import FilterUsers from "@/components/filterUsers";
const response =await fetch("https://jsonplaceholder.typicode.com/users");
const users=await response.json();

export default async function Users(){

    return (
        <>
        <nav className="flex fixed justify-center items-center w-full">
            <ul className="flex gap-8 justify-center items-center">
                <li>Landings</li>
                <li>Secondary</li>
                <li>Documentation</li>

            </ul>
            <button className="cursor-pointer right-8 fixed bg-red-600 p-1 rounded-md mt-1">Buy Now</button>
        </nav>

        <main className="w-full h-screen flex items-center justify-center">
            <div className="text-4xl">
                Develop Beautiful Websites with <div className="text-4xl text-red-700">Manan</div>
            </div>
        </main>

        <h1>User Page</h1>
        <FilterUsers users={users}/>
        </>
    )
}