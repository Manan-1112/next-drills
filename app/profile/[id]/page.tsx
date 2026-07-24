

type profileParams = {
  params: Promise<{
    id: string;
  }>;
};

const Users = [
  {
    id: 1,
    name: "Manan Bansal",
    email: "manan.dev@gmail.com",
  },
  {
    id: 2,
    name: "John Doe",
    email: "abc@gmail.com",
  },
  {
    id: 3,
    name: "Jane Doe",
    email: "jane.doe@gmail.com",
  },
];

export default async function ProfilePage({ params }: profileParams ) {
    const {id}=await params;
    
    const user=Users.find((u) => u.id === Number(id));
  return (
    <>
      <h1>Profile Page</h1>
      <p>Name: {user?.name ?? "User not found"}</p>
      <p>Email: {user?.email ?? "-"}</p>
    </>
  );
}