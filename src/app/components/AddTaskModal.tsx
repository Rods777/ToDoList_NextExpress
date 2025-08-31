"use client"

import { Dialog, Button, Flex, TextField, Text } from '@radix-ui/themes';
import { FaPlus } from "react-icons/fa";
import { addTask } from '../../../api';
import toast from 'react-hot-toast';
import { useState } from 'react';

// Modal Component that adds new task
export const AddTaskModal = () => {
    const [ open, setOpen ] = useState<boolean>(false)

    // Handles form submission
    const handleSubmitTask = async (formData: FormData) => {
        const description = formData.get("description")?.toString().trim()
        
        // Checks if description is empty
        if (!description) {
            toast.error("Please fill out the description");
            return;
        }

        try {
            await addTask(formData);
            setOpen(false)
            toast.success("Task added successfully!")
        } catch (error: any) {
            toast.error("Failed to add task")
        }
    } 

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            {/* Button to trigger modal */}
            <Dialog.Trigger>
                <Button size="3" color='green'><FaPlus /> Add Task</Button>
            </Dialog.Trigger>

            {/* Add Task Modal Content */}
            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Add Task</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    What's on your mind?
                </Dialog.Description>

                <form action={handleSubmitTask}>
                    <Flex direction="column" gap="1">
                        <label>
                            <Text as="div" size="2" mb="2" weight="bold">
                                Description
                            </Text>
                            {/* Input field for entering the task description */}
                            <TextField.Root
                                placeholder="Enter your task description..."
                                name="description"
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
