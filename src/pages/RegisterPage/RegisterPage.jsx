import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import Main from './components/Main';
import Register from './components/Register';
import Login from './components/Login';

const RegisterPage = () => {
    const [login, setLogin] = useState("login")
    return (
        <Box {...css.box}>
            <SimpleGrid columns={2}>
                <Main />
                {
                    login === "register" ? <Register setLogin={setLogin} /> : <Login setLogin={setLogin} />
                }
            </SimpleGrid>
        </Box>
    );
}

export default RegisterPage;

const css = {
    box: {
        height: "100vh",
        background: "white"
    }
}