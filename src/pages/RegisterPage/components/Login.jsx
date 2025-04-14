import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '../../../context';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const Login = ({ setLogin }) => {
    const auth = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { email: "", password: "" },
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        const { email: email, password } = data
        auth.login({ email, password }, () => {
            toast.error("Xatolik yuzaga keldi!")
        })
    }
    return (
        <Box {...css.box}>
            <Heading {...css.title}>Log in</Heading>
            <form onSubmit={handleSubmit(onSubmit)} className='register-form' action="">
                <label htmlFor="name">
                    Mail
                    <input {...register("email")} type="text" placeholder='Enter your gmail ' className='form-input' />
                </label>
                <label htmlFor="name">
                    Password
                    <input {...register("password")} type="password" placeholder='Enter your password' className='form-input' />
                </label>
                <Button type='submit' {...css.submit}>Log in</Button>
            </form>
            <p className='form-text'>If you don’t account ? <span onClick={() => setLogin("register")}>Sign in</span> </p>
        </Box>
    );
}

export default Login;

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