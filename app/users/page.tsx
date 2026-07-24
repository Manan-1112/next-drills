import FilterUsers from "@/components/filterUsers";
const response =await fetch("https://jsonplaceholder.typicode.com/users");
const users=await response.json();

export default async function Users(){

    return (
        <>
        <h1>User Page</h1>
        <FilterUsers users={users}/>
        </>
    )
}