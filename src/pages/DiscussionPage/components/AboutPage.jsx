import { Box, Button, Flex, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import useGetAllQuery from '../../../hooks/useGetAllQuery';

import AvatarIcon from '../../../assets/icon.png'
import usePostQuery from '../../../hooks/usePostQuery';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AboutPage = () => {
    const id = useParams()
    // const { data } = useGetAllQuery({
    //     key: "discussionData",
    //     url: '/api/v1/discussions/'
    // })

    const { data: discussionCommentData, refetch } = useGetAllQuery({
        key: "discussionCommentData",
        url: '/api/v1/discussions/discussions/50002/comments'
    })
    const { data: contestData } = useGetAllQuery({
        key: "contestData",
        url: `/api/v1/contests/${id?.id}`
    })
    // const discussionByContestData = data?.data?.filter((item) => item?.contest_id == id?.id)

    const { mutate } = usePostQuery({
        listKeyId: 'postDiscussion',
        hideSuccessToast: true
    });
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {},
        mode: 'onChange',
    });


    const onSubmit = (data) => {
        const submitData = {
            content: data?.content,
            discussion_id: 50002
        }
        mutate(
            {
                url: '/api/v1/discussions/discussions/50002/comments',
                attributes: submitData
            },
            {
                onSuccess: (data) => {
                    toast.success("Sizning fikringiz muvaffaqiyatli jo'natildi!");
                    reset();
                    refetch()
                    console.log(data)
                },
                onError: (e) => {
                    console.log(e);
                }
            }
        );
    };

    console.log(discussionCommentData)

    return (
        <Box>
            <Box mt={'128px'}>
                <Heading {...css.title}>{contestData?.data?.title}</Heading>
                <Text {...css.text}>Solve challenges, earn rewards, and climb the leaderboard. Show you're the best coder! </Text>
            </Box>
            <Text {...css.description}>{contestData?.data?.description}</Text>

            <form onSubmit={handleSubmit(onSubmit)} action="">
                <Flex {...css.item}>
                    <input {...register("content")} placeholder='Type comment here...' className='discussion-input' />
                    <Button type='submit content' {...css.button}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M12.5 4.5V20.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.49997 9.5C7.49997 9.5 11.1825 4.5 12.5001 4.5C13.8177 4.5 17.5 9.5 17.5 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                </Flex>
            </form>
            {
                discussionCommentData?.data?.map((item, index) => (
                    <Box borderBottom={'1px solid rgba(0, 0, 0, 0.30)'} m={'42px 0'} key={index}>
                        <Flex gap={'12px'} align={'center'}>
                            <Image src={AvatarIcon} alt="AvatarIcon" />
                            <Heading fontSize={'20px'}>Diyorbek_uiux</Heading>
                        </Flex>
                        <Text mb={'24px'} mt={'18px'} fontSize={'20px'}>{item?.content}</Text>
                    </Box>
                ))
            }
        </Box>
    );
}

export default AboutPage;

const css = {
    title: {
        textAlign: "center",
        color: "#152B46",
        fontSize: "58px",
        lineHeight: "66px",
        fontWeight: "700",
        marginBottom: "16px"
    },
    text: {
        color: "#58626E",
        textAlign: "center",
        fontSize: "20px",
        lineHeight: "26px",
        fontWeight: "400",
        width: "500px",
        margin: "auto"
    },
    description: {
        fontSize: "20px",
        lineHeight: "34px",
        fontWeight: "400",
        marginTop: "45px"
    },
    item: {
        borderRadius: "8px",
        border: "1px solid rgba(0, 0, 0, 0.30)",
        background: "#EDF2FF",
        boxShadow: "0px 8px 24px 0px rgba(149, 157, 165, 0.20)",
        padding: "10px 12px 10px 20px",
        marginTop: "60px",
        marginBottom: "36px"
    },
    button: {
        border: "none",
        borderRadius: "8px",
        background: "#0153D5",
        transition: "0.3s",
        _hover: {
            background: "#0153D5",
        }
    },

}
