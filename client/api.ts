import { Task } from './types/tasks';

const apiBaseUrl = 'http://localhost:4000';

// Fetches all tasks from the API
export const getAllTasks = async (): Promise<Task[]> => {
    const res = await fetch(`${apiBaseUrl}/tasks`);
    if (!res.ok) {
        throw new Error('Failed to fetch tasks');
    }
    return res.json()
}

// Adds new task to tasks data
export const addTask = async (task: string) => {
    const res = await fetch(`${apiBaseUrl}/tasks`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ task }),
    })

    if (!res.ok) throw new Error('Failed to add task');

    else alert('Task Added Sucessfully');
}
