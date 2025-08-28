import { Task } from './types/tasks';

const apiBaseUrl = 'http://localhost:4000';

// Fetches all tasks from the API
export const getAllTasks = async (): Promise<Task[]> => {
    const response = await fetch(`${apiBaseUrl}/tasks`);
    if (!response.ok) {
        throw new Error('Failed to fetch tasks');
    }
    return response.json()
}
