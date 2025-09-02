'use client'

import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes"
import { FaEdit } from "react-icons/fa"
import { getTaskById } from "../../../api"
import { useEffect, useState } from "react"
import { Task } from "../../../types/tasks"
import toast from "react-hot-toast"

interface EditTaskModalProps {
    id: string | number
}

export const EditTaskModal = ({ id }: EditTaskModalProps) => {
    const [ task, setTask ] = useState<any>()
    const [ description, setDescription ] = useState<string>("")

    useEffect(() => {
        // Retrieves the task once rendered
        const fetchTaskById = async () => {
            try {
                const task: Task = await getTaskById(id);
                setTask(task);
            } catch (err) {
                toast.error("Failed to fetch task by id")
            }
        }

        fetchTaskById();
    }, [])


    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    return (
        <Dialog.Root>
            {/* Button to trigger modal */}
            <Dialog.Trigger>
                <FaEdit cursor={"pointer"} className="text-blue-600" size={20}/>
            </Dialog.Trigger>

            {/* Edit Task Modal Content */}
            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Edit Task</Dialog.Title>

                <form>
                    <Flex direction="column" gap="1">
                        <label>
                            <Text as="div" size="2" mb="2" weight="bold">
                                Description
                            </Text>
                            {/* Input field for entering the task description */}
                            <TextField.Root
                                placeholder="Enter your task description..."
                                name="description"
                                value={task?.description}
                                onChange={handleDescriptionChange}
                            />
                        </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <Button type='submit'>Save</Button>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    )
}
