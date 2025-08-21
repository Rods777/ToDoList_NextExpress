import { Table } from "@radix-ui/themes"

export const ToDoList = () => {
  return (
    <Table.Root variant="surface" className="w-full">
        <Table.Header>
            <Table.Row>
                <Table.ColumnHeaderCell className="w-3/4">Description</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="w-1/4">Actions</Table.ColumnHeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                <Table.Cell>danilo@example.com</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table.Root>
  )
}