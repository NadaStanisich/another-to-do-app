import { GetToDoList } from "@/app/lib/fetch"; 

export default async function List() {
  const lists = await GetToDoList();
  
  console.log(lists);

  return (
    <div>
      <h1>ToDo List</h1>
        <ul>
            {lists.map((lists: any) => (
            <li key={lists.id}>{lists.text}</li>
            ))}
        </ul>
    </div>
  );
}