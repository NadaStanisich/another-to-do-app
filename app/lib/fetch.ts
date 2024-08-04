"use server"

export async function GetToDoList() {
  const data = await fetch("https://669872b22069c438cd6ec955.mockapi.io/ToDo");
    if (data.ok) {
        const todolist = await data.json();
        return todolist;
    }


  return null;
}