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

export default function AddUserModal(props) {
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
            <Button onClick={handleOpen} variant="outlined" color="primary">افزودن کاربر</Button>
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
                        <h2 className={classes.title} id="transition-modal-title">افزودن کاربر</h2>
                        <div>
                            <EditUserForm handleClose={handleClose} setUsers={props.setUsers} users={props.users}></EditUserForm>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
