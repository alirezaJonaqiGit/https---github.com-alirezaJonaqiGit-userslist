import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState , useEffect} from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditUserModal from './editUserModal';
import Button from '@material-ui/core/Button';
import AddUserModal from './addUserModal';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableRow: {
    },
    tableCell: {
        direction: 'rtl!important',
        textAlign: 'right!important',
    }
});


export default function UsersTable() {

    const classes = useStyles();
    const [users, setUsers] = useState([]);

    let handleCreate = () => {}; 

    // componentDidMount
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://reqres.in/api/users?page=2');
            setUsers(response.data.data);
        }
        fetchData();
    }, []);

    return (
        <TableContainer className='shadow rounded' component={Paper}>
            <Table dir='rtl' className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow className={classes.tableRow}>
                        <TableCell className={classes.tableCell}>نام کاربری</TableCell>
                        <TableCell className={classes.tableCell}>شماره</TableCell>
                        <TableCell className={classes.tableCell}>
                            
                            <AddUserModal users={users} setUsers={setUsers} />
                        
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user, index) => (
                        <TableRow  key={index}>
                            <TableCell className={classes.tableCell}>{`${user.first_name} ${user.last_name}`}</TableCell>
                            <TableCell className={classes.tableCell}>{user.id}</TableCell>
                            <TableCell className={classes.tableCell}>
                                <EditUserModal users={users} user={user} setUsers={setUsers} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

{/* <AddUserModal users={users} setUsers={setUsers} /> */}