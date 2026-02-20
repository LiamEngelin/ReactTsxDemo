import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTask, type CreateTaskInput, type Task} from '../services/tasks.service.reactquery'


export const useCreateTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (payload: CreateTaskInput) => createTask(payload),
        // onSuccess: (newTask) => {
        //     queryClient.setQueryData(["tasks"], (oldData: Task[] | undefined) => {
        //     return oldData ? [newTask, ...oldData] : [newTask];
        //     })
        // }
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["tasks"]})
            console.log("Added new task");
        }
    })
}