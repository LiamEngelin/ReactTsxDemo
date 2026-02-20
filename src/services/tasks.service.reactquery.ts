import client  from '../apis/client.reactquery'

export type Task = {
    id: number;
    title: string;
    body: string;
}

export type CreateTaskInput = {
    title: string;
    body: string;
}

export async function getTasks(): Promise<Task[]> {
    const { data } = await client.get("/posts");
    return data;
}

export async function createTask(input: CreateTaskInput): Promise<Task> {
    const { data} = await client.post("/posts", input);
    return data;
}