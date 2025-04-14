import React from 'react';
import useGetAllQuery from '../../../hooks/useGetAllQuery';
import SolutionIcon from '../../../assets/SolutionIcon';
import LockIcon from '../../../assets/LockIcon';
import CheckIcon from '../../../assets/CheckIcon';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading
} from '@chakra-ui/react';

const HistoryList = () => {
    const { data: userData } = useGetAllQuery({
        key: "userData",
        url: "/users/me"
    })
    const { data, isLoading } = useGetAllQuery({
        key: "getAllHistory",
        url: `/api/v1/submissions/user/${userData?.data?.id}`,
        params: {}
    })
    return (
        <TableContainer mt={'40px'}>
            <Table variant='simple'>
                <Thead borderRadius={'6px'} bg={'#F6F8FA'}>
                    <Tr>
                        <Th {...css.name}>Status</Th>
                        <Th {...css.name}>Subject</Th>
                        <Th {...css.name}>Difficulty</Th>
                        <Th {...css.name}>Popularity</Th>
                    </Tr>
                </Thead>
                {
                    isLoading ? <Heading fontSize={'22px'} position={'relative'} color={'#152B46'} left={'350px'} >Yuklanmoqda...</Heading> : <Tbody>
                        {
                            data?.data?.items?.map((item, index) => (
                                <Tr key={index}>
                                    <Td>
                                        {item?.is_active ? <CheckIcon /> : ""}
                                    </Td>
                                    <Td>{item?.title}</Td>
                                    {/* <Td>
                                        <SolutionIcon />
                                    </Td>
                                    <Td>{item?.acceptance_rate ?? "--"}</Td> */}
                                    <Td bg={`${item?.difficulty === "medium" ? "#358168" : item?.difficulty === 'hard' ? "#FFBF1E" : "#FF6063"}`} {...css.status} >{item?.difficulty}</Td>
                                    <Td>
                                        <LockIcon />
                                    </Td>
                                </Tr>
                            ))
                        }

                    </Tbody>
                }
            </Table>
        </TableContainer>
    );
}

export default HistoryList;

const css = {
    status: {
        padding: "4px 12px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "400",
        marginTop: "14px",
        cursor: "pointer",
        textTransform: 'uppercase'
    },
    name: {
        color: "#565656",
        fontSize: "14px",
        fontWeight: "400"
    },
}