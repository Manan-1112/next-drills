export async function GET(){
   const response =await fetch("https://jsonplaceholder.typicode.com/users");
   const users=await response.json();

    return  Response.json(
        users
    );
}


export async function POST(request:Request){
    const body=await request.json()
    console.log(body)
    return Response.json({
        message:"user created",
        data:body
       });

}