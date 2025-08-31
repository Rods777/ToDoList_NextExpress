import { Table } from "@radix-ui/themes"
import { getAllTasks } from "../../../api"
import { Task } from "../../../types/tasks";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

// TodoList component displays a list of tasks
export const ToDoList = async () => {
    const tasks = await getAllTasks();
    return (
        <Table.Root variant="surface" className="w-full">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell className="w-full">Description</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {/* Renders if the tasks is empty */}
                {tasks.length === 0 && (
                    <Table.Row>
                        <Table.Cell colSpan={2} className="text-center">No tasks yet</Table.Cell>
                    </Table.Row>
                )}

                {/* Iterates and renders the fetched tasks */}
                {tasks.map((task: Task) => (
                    <Table.Row key={task.id}>
                        <Table.RowHeaderCell>{task.description}</Table.RowHeaderCell>
                        <Table.Cell className="flex gap-5 items-center">
                            {/* Action Buttons */}
                            <FaEdit className="text-blue-600" size={20}/>
                            <MdDelete className="text-red-600" size={25}/>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}