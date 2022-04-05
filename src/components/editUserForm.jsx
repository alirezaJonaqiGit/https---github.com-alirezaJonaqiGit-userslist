import React from "react";
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { Button } from "bootstrap";
import '../styles/style.css'

export default function EditUserForm(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {

        let [...newUsersList] = props.users;

        if (props.user == undefined) {
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
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-6">
                    <TextField className="textField" defaultValue={props.user == undefined?'': props.user.first_name} required {...register("first_name")} label="First Name" />
                </div>
                <div className="col-md-6">
                    <TextField className="textField" defaultValue={props.user == undefined?'': props.user.last_name} required {...register("last_name")} label="Last Name" />
                </div>
                <div className="col-md-6">
                    <TextField className="textField" defaultValue={props.user == undefined?'': props.user.id} {...register("id")} label="ID" />
                </div>
                <div className="col-md-6">
                    <TextField className="textField" defaultValue={props.user == undefined?'': props.user.email} {...register("email")} label="email" />
                </div>
            </div>
            <input className="btn btn-primary submitFormBtn" type="submit" value="ثبت تغییرات" />
            <input onClick={props.handleClose} type="button" value="انصراف" className="btn btn-danger submitFormBtn mx-3" />
            {errors.exampleRequired && <span>This field is required</span>}
        </form>
    );
}
