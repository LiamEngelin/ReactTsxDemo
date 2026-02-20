# Reflections on manual api creation

1. List every piece of state you had to create in this lab.
* const [tasks, setTasks] = useState<Task[]>([]);
* const [isLoading, setIsLoading] = useState<boolean>(true);
* const [error, setError] = useState<string | null>(null);
* const [title, setTitle] = useState<string>("");
* const [body, setBody] = useState<string>("");
* const [isCreating, setIsCreating] = useState<boolean>(false);
* const [createError, setCreateError] = useState<string | null>(null)
#
2. What exact code did you have to write for loading + error handling?


Loading was as simple as this:

```tsx
if (isLoading) {
        return <p>Loading...</p>
    }
```

Error handling was done using try catches: 
```tsx
    try{
        const taskInput: CreateTaskInput = {
            title: title,
            body: body
        };

        const newTask = await createTask(taskInput);

        setTasks(prevTasks => [newTask, ...prevTasks]);
        setTitle("")
        setBody("");

    } catch (err) {
        setCreateError(err instanceof Error ? err.message : "Failed to create task");
    } finally {
        setIsCreating(false);
    }

    if (error) {
        return <p>Error: {error}</p>
    }
```
#
3. After creating a task, how did you keep the UI in sync with the server?


I used the "manual insert" method to insert thereturned task into the tasks state:
```tsx
    const newTask = await createTask(taskInput);
    setTasks(prevTasks => [newTask, ...prevTasks]);
```
#
4. What would be annoying if you had 5 different pages doing this pattern?

Having to write the same logic for error handling and race condition prevention for every single page that fetches the api.  
#
5. Based on this experience, what do you *hope* a library like React Query can do for you?

I hope react query does all the heavy lifting for me. So if I want to fetch a list of data, react query will make sure there are no race conditions and does error handling for me. I also read that react query takes care of caching, which I have no clue how to implement manually, that would be very handy if true.   
#
6. What did your `client.ts` wrapper do for you compared to calling `fetch` directly everywhere?

I did not have to re-enter the baseurl everytime, it also handleded error by checking if the response is valid. And for the post method, it made sure the request was always POST and always contained the 'Content-Type': 'application/json' header. 
