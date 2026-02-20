import { useEffect, useState } from "react";
import { getTasks, createTask } from "../../services/tasks.service.manual";
import { type Task, type CreateTaskInput } from "../../services/tasks.service.manual";

export const TasksPageManual = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [isCreating, setIsCreating] = useState<boolean>(false);
    const [createError, setCreateError] = useState<string | null>(null);

    useEffect(() => {
        let ignore: boolean = false;
        setIsLoading(true);
        getTasks()
            .then(result => {
                if (!ignore) {
                    setTasks(result);
                }
            })
            .catch(err => {
                if (!ignore) {
                    setError(err instanceof Error ? err.message : "Unknown error");
                }
            })
            .finally(() => {
                if(!ignore){
                    setIsLoading(false);
                }
            });

            return () => {
                ignore = true;
            }
    }, []);

    const onCreateTaskButton = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsCreating(true);
        setCreateError(null);

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
    };

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <>
            <div>
                <form onSubmit={onCreateTaskButton}>
                    <div>
                        <input
                            placeholder="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                        />
                        <input
                            placeholder="body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            type="text"
                        />
                        <button type="submit" disabled={isCreating}>Create</button>
                    </div>
                </form>
                {createError && <p>{createError}</p>}
            </div>
            <div>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <h3>{task.title}</h3>
                        </li>
                    ))}
                </ul>
                {error && <p>{error}</p>}
            </div>
        </>
    );
}