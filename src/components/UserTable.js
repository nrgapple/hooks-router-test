import React from 'react';
import { 
    Table, 
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button
} from "@material-ui/core";
export default () => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Actions</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Name data</TableCell>
                <TableCell>Username data</TableCell>
                <TableCell>
                    <Button>Edit</Button>
                </TableCell>
                <TableCell>
                    <Button>Delete</Button>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
);