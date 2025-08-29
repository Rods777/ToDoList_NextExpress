import { Table } from "@radix-ui/themes"
import { getAllTasks } from "../../../api"
import { Task } from "../../../types/tasks";

// TodoList component displays a list of tasks
export const ToDoList = async () => {
    const tasks = await getAllTasks();
    return (
        <Table.Root variant="surface" className="w-full">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell className="w-3/4">Description</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="w-1/4">Actions</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {/* Iterates and renders the fetched tasks */}
                {tasks.map((task: Task) => (
                    <Table.Row key={task.id}>
                    <Table.RowHeaderCell>{task.description}</Table.RowHeaderCell>
                    <Table.Cell>danilo@example.com</Table.Cell>
                </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}