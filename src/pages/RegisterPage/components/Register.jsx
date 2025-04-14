import { Box, Button, Heading, Input } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../context';
import { toast } from 'react-toastify';

const Register = ({ setLogin }) => {
    const auth = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { email: "", password: "", username: "" },
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        const { email: email, password, username } = data
        auth.register({ email, password, username }, () => {
            toast.error("Xatolik yuzaga keldi!")
        })
    }
    return (
        <Box {...css.box}>
            <Heading {...css.title}>Create an account</Heading>
            <form onSubmit={handleSubmit(onSubmit)} className='register-form' action="">
                <label htmlFor="name">
                    Username
                    <input {...register("username")} type="text" placeholder='Enter username' className='form-input' />
                </label>
                <label htmlFor="password">
                    Password
                    <input {...register("password")} type="password" placeholder='Enter your password' className='form-input' />
                </label>
                <label htmlFor="email">
                    Mail
                    <input {...register("email")} type="text" placeholder='Enter your gmail ' className='form-input' />
                </label>
                <Button type='submit' {...css.submit}>Create account</Button>
            </form>
            <p className='form-text'>Already have an account ? <span onClick={() => setLogin("login")}>Log in</span> </p>
        </Box>
    );
}

export default Register;

const css = {
    box: {
        width: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 auto"
    },
    title: {
        fontSize: "28px",
        color: "#101828",
        marginBottom: "32px"
    },
    submit: {
        borderRadius: "8px",
        background: "var(--container-primary, #1570EF)",
        height: "48px",
        color: "#FCFCFD",

        _hover: {
            background: "var(--container-primary, #1570EF)",
        }
    }
}