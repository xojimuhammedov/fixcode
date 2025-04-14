import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

import AvatarIcon from '../../../assets/avatar.png'
import useGetAllQuery from '../../../hooks/useGetAllQuery';

const Main = () => {

    const { data } = useGetAllQuery({
        key: "userData",
        url: "/users/me"
    })
    return (
        <Box {...css.main}>
            <Flex flexDirection={'column'} gap={'12px'} align={'center'}>
                <Image {...css.image} src={AvatarIcon} alt='AvatarIcon' />
                <Box width={'100%'}>
                    <Heading {...css.title}>{data?.data?.username}</Heading>
                    <Text {...css.email}>{data?.data?.email}</Text>
                </Box>
            </Flex>
            <Heading {...css.name}>About</Heading>
            <Text {...css.text}>
                I'm Diyorbek Qadamboyev, a Python developer at Google, passionate about building efficient and scalable solutions.
            </Text>
            <Flex m={'14px 0'} align={'center'} gap={'8px'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                    <path d="M13.2916 8.74992C13.2916 10.0156 12.2656 11.0416 10.9999 11.0416C9.73428 11.0416 8.70825 10.0156 8.70825 8.74992C8.70825 7.48427 9.73428 6.45825 10.9999 6.45825C12.2656 6.45825 13.2916 7.48427 13.2916 8.74992Z" stroke="#141B34" />
                    <path d="M12.1525 16.5357C11.8433 16.8335 11.4301 16.9999 11.0001 16.9999C10.57 16.9999 10.1568 16.8335 9.84758 16.5357C7.01636 13.7923 3.22218 10.7276 5.07249 6.27834C6.07293 3.87263 8.47445 2.33325 11.0001 2.33325C13.5257 2.33325 15.9272 3.87264 16.9276 6.27834C18.7756 10.722 14.9907 13.8018 12.1525 16.5357Z" stroke="#141B34" />
                    <path d="M16.5 18.8333C16.5 19.8458 14.0376 20.6666 11 20.6666C7.96243 20.6666 5.5 19.8458 5.5 18.8333" stroke="#141B34" stroke-linecap="round" />
                </svg>
                <Heading fontSize={'14px'} fontWeight={'400'}>Uzbekistan, Tashkent</Heading>
            </Flex>
            <Flex m={'14px 0'} align={'center'} gap={'8px'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                    <path d="M2.75 19.75L9.66937 12.8306M9.66937 12.8306L2.75 3.25H7.33333L12.3306 10.1694M9.66937 12.8306L14.6667 19.75H19.25L12.3306 10.1694M19.25 3.25L12.3306 10.1694" stroke="#141B34" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <Heading fontSize={'14px'} fontWeight={'400'}>diorqadamboyev</Heading>
            </Flex>
            <Flex m={'14px 0'} align={'center'} gap={'8px'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                    <path d="M1.83325 13.3334C1.83325 10.7586 1.83325 9.47114 2.4512 8.54633C2.71872 8.14596 3.06247 7.80221 3.46283 7.53469C4.38764 6.91675 5.67508 6.91675 8.24992 6.91675H13.7499C16.3247 6.91675 17.6122 6.91675 18.537 7.53469C18.9373 7.80221 19.2811 8.14596 19.5487 8.54633C20.1666 9.47114 20.1666 10.7586 20.1666 13.3334C20.1666 15.9082 20.1666 17.1957 19.5487 18.1205C19.2811 18.5208 18.9373 18.8646 18.537 19.1322C17.6122 19.7501 16.3247 19.7501 13.7499 19.7501H8.24992C5.67508 19.7501 4.38764 19.7501 3.46283 19.1322C3.06247 18.8646 2.71872 18.5208 2.4512 18.1205C1.83325 17.1957 1.83325 15.9082 1.83325 13.3334Z" stroke="#141B34" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.6666 6.91667C14.6666 5.18818 14.6666 4.32394 14.1296 3.78697C13.5926 3.25 12.7284 3.25 10.9999 3.25C9.27145 3.25 8.40719 3.25 7.87023 3.78697C7.33325 4.32394 7.33325 5.18818 7.33325 6.91667" stroke="#141B34" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.5 10.5833L6.0 Australia9764 10.7684C9.24468 11.7438 12.7553 11.7438 15.9023 10.7684L16.5 10.5833M11 11.4999V13.3333" stroke="#141B34" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <Heading fontSize={'14px'} fontWeight={'400'}>Google | Python developer</Heading>
            </Flex>
            {/* <Button {...css.button}>Edit profile</Button> */}
        </Box>
    );
}

export default Main;

const css = {
    main: {
        borderRadius: "15px",
        background: "#EDF2FF",
        width: "406px",
        padding: "36px 20px 239.904px 20px",
    },
    text: {
        color: "#565656",
        lineHeight: "23px",
        fontWeight: "400"
    },
    name: {
        fontSize: "18px",
        fontWeight: "600",
        margin: "7px 0",
        marginTop: "48px"
    },
    title: {
        fontSize: "22px",
        fontWeight: "600",
        textAlign: "center",
        margin: "14px 0"
    },
    email: {
        color: "#565656",
        fontSize: "14px",
        borderRadius: "100px",
        border: "1px solid #C0C0C0",
        padding: "8px 14px",
        width: "295px",
        margin: "0 auto",
        textAlign: "center",
        cursor: "pointer"
    },
    button: {
        background: "#0153D5",
        borderRadius: "10px",
        color: "#fff",
        width: "100%",
        marginTop: "12px",

        _hover: {
            background: "#0153D5",
        }
    },
    image: {
        width: "180px"
    }
}