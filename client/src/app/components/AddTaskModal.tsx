import { Dialog, Button, Flex, TextField, Text } from '@radix-ui/themes';
import { FaPlus } from "react-icons/fa";

// Modal Component that adds new task
export const AddTaskModal = () => {
  return (
    <Dialog.Root>
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

            <Flex direction="column" gap="1">
                <label>
                    <Text as="div" size="2" mb="2" weight="bold">
                        Description
                    </Text>
                    {/* Input field for entering the task description */}
                    <TextField.Root
                        placeholder="Enter your task description..."
                    />
                </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                    <Button variant="soft" color="gray">
                        Cancel
                    </Button>
                </Dialog.Close>
                <Dialog.Close>
                    <Button>Save</Button>
                </Dialog.Close>
            </Flex>
        </Dialog.Content>
    </Dialog.Root>
  )
}
