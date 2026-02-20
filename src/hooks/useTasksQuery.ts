import { useQuery, } from '@tanstack/react-query'
import { getTasks } from '../services/tasks.service.reactquery'

export const useTasks = () => {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: getTasks
    })
};

