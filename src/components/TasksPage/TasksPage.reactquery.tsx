import { useState } from "react";
import { useCreateTask } from "../../hooks/useCreateTaskMutation";
import { useTasks } from "../../hooks/useTasksQuery";

export const TasksPageReactQuery = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const { data: tasks, isPending: isPendingTasks, error: getError} = useTasks();
    const { mutate, isPending: isPendingCreateTask, error: createError} = useCreateTask();

    const onCreateTaskButton = async (e: React.FormEvent) => {
        e.preventDefault();
        mutate({title, body}, {
            onSuccess: () => {
                setTitle("");
                setBody("");
            }
        })
    }

    if(isPendingTasks) {
        return <p>Loading Posts...</p>
    }

    if(getError) {
        return <p>Could not fetch posts: {getError?.message}</p>
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
                        <button type="submit" disabled={isPendingCreateTask}>Create</button>
                    </div>
                </form>
                {createError && <p>{createError.message}</p>}
            </div>
            <div>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <h3>{task.title}</h3>
                        </li>
                    ))}
                </ul>
                {getError && <p>Failed to get posts</p>}
            </div>
        </>
    );
}