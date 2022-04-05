import React from "react";
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { Button } from "bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

import '../styles/style.css'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    textFieldWrapper: {
        position: 'relative'
    },
    errMsg: {
        color: "#ef3948",
        position: 'absolute',
        left: "0",
        top: "100%",
        fontSize: '.8rem',
        textAlign: 'right!important',
        direction: 'rtl!important'
    }
}));



export default function EditUserForm(props) {

    const classes = useStyles();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {

        let [...newUsersList] = props.users;

        if (props.user === undefined) {
            newUsersList.push(data);
        }else {
            newUsersList.splice(newUsersList.findIndex(user => user.id == props.user.id), 1, data);
        }

        props.setUsers(newUsersList);
        props.handleClose();
    };

    // console.log(watch("example")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form   onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.root}>

                <Grid container spacing={3}>

                    <Grid item xs={12} md={6}>
                        <div className={classes.textFieldWrapper}>
                            <TextField className="textField" defaultValue={props.user === undefined ? '' : props.user.first_name}  {...register("first_name", { required: true })}  label="First Name" />
                            <span className={classes.errMsg}>
                                {errors.first_name?.type === 'required' && "نام را وارد کنید"}
                            </span>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className={classes.textFieldWrapper}>
                            <TextField className="textField" defaultValue={props.user === undefined ? '' : props.user.last_name}   {...register("last_name", { required: true })}  label="Last Name" />
                            <span className={classes.errMsg}>
                                {errors.last_name?.type === 'required' && "نام خانوادگی را وارد کنید"}
                            </span>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className={classes.textFieldWrapper}>
                            <TextField className="textField" defaultValue={props.user === undefined ? '' : props.user.id} {...register("id")} label="ID" />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className={classes.textFieldWrapper}>
                            <TextField className="textField" defaultValue={props.user === undefined ? '' : props.user.email} {...register("email")} label="email" />
                        </div>
                    </Grid>

                </Grid>

            </div>

            
            <input className="btn btn-primary submitFormBtn" type="submit" value="ثبت تغییرات" />
            <input onClick={props.handleClose} type="button" value="انصراف" className="btn btn-danger submitFormBtn mx-3" />
            
            {errors.exampleRequired && <span>این فیلد اجباری است!</span>}
        </form>
    );
}

/* */

