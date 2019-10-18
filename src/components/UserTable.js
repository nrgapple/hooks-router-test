import React from 'react';
import { 
    Table, 
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button
} from "@material-ui/core";
export default ({users, deleteUser, editRow}) => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {users.length > 0 ? (
                users.map(user => (
                    <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>
                            <Button
                                onClick={() => editRow(user)}
                            >
                                Edit
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button onClick={() => deleteUser(user.id)}
                                color="secondary"
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))
            ) : (
                <TableRow>
                    <TableCell colSpan={3}>No users</TableCell>
                </TableRow>
            )}
        </TableBody>
    </Table>
);