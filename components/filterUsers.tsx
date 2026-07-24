"use client"
import { useState } from "react";
type User={
    id:number,
    name:string
}

type Props = {
  users: User[];
};

export default function FilterUsers({ users }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  return(
      <div>
          <input type="text"
          placeholder="Search users"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          />
          <ul>
              {filteredUsers.map((user:User)=>(
                  <li key={user.id}>{user.name}</li>
              ))}
          </ul>   
      </div>
  )
}