"use server";
export async function serverAction() {
   
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Server action completed");
            resolve("Server action completed");
        }, 2000);
    });
}