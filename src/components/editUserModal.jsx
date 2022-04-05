import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditUserForm from './editUserForm';
import '../styles/style.css'


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(3px)'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: '1rem'
    },
    title: {
        margin: '1rem 0 1rem',
        paddingBottom: '1.5rem',
        textAlign: 'center',
        borderBottom: '1px solid #0001'
    }
}));

export default function EditUserModal(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" color="primary">ویرایش</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 className={classes.title} id="transition-modal-title">{props.user.first_name} {props.user.last_name}</h2>
                        <div>
                            <EditUserForm handleClose={handleClose} users={props.users} user={props.user} setUsers={props.setUsers}></EditUserForm>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
