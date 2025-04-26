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
import dayjs from 'dayjs';

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
                        <Th {...css.name}>Date</Th>
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
                                        {dayjs(item?.created_at).format('YYYY-MM-DD')}
                                    </Td>
                                    <Td>{item?.title}</Td>
                                    {/* <Td>
                                        <SolutionIcon />
                                    </Td>
                                    <Td>{item?.acceptance_rate ?? "--"}</Td> */}
                                    <Td {...css.status} >{item?.status}</Td>
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
        fontWeight: "400",
        marginTop: "14px",
    },
    name: {
        color: "#565656",
        fontSize: "14px",
        fontWeight: "400"
    },
}