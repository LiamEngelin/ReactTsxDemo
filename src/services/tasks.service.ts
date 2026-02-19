import {get, post} from '../apis/client'

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
    return get<Task[]>("/postsa");
}

export async function createTask(input: CreateTaskInput): Promise<Task> {
    return post<Task, CreateTaskInput>("/posts", input)
}