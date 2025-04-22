import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  Progress,
  Stack,
  Badge,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  CircularProgress,
  CircularProgressLabel,
  Container,
  VStack,
  Divider
} from '@chakra-ui/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, AreaChart, Area, RadialBarChart, RadialBar } from 'recharts';

export default function AdvancedAnalyticsChakra() {

  // Data for charts
  const progressData = [
    { name: 'Easy', solved: 124, total: 246, color: '#4ade80', percentage: 50.4 },
    { name: 'Medium', solved: 148, total: 240, color: '#facc15', percentage: 61.7 },
    { name: 'Hard', solved: 98, total: 342, color: '#f87171', percentage: 28.7 }
  ];

  const totalSolved = progressData.reduce((acc, item) => acc + item.solved, 0);
  const totalProblems = progressData.reduce((acc, item) => acc + item.total, 0);

  const reversedProgressData = [...progressData].reverse();

  return (
    <Box bg="gray.50" p={6} borderRadius="xl" boxShadow="lg">
      <Stack spacing={4}>
        <Box bg="white" p={4} borderRadius="lg" boxShadow="sm">
          <Flex align="center" justify="space-between" mb={3}>
            <Heading {...css.title} >Analytics Summary</Heading>
            <Badge colorScheme="blue" fontSize="xs" fontWeight={'500'} px={2.5} py={0.5} borderRadius="md">
              {Math.round((totalSolved / totalProblems) * 100)}% completed
            </Badge>
          </Flex>

          <Flex justify="space-between" mb={2}>
            <Flex gap={'8px'} flexDirection={'column'}>
              <Heading fontSize="3xl">{totalSolved}</Heading>
              <Heading fontSize="sm" color="gray.500">Problems Solved</Heading>
            </Flex>
            <Flex gap={'8px'} flexDirection={'column'}>
              <Heading fontSize="3xl">{totalProblems}</Heading>
              <Heading fontSize="sm" color="gray.500">Total Problems</Heading>
            </Flex>
          </Flex>
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {progressData.map((item, index) => (
            <Box key={index} bg="white" p={4} borderRadius="lg" boxShadow="sm" position="relative" overflow="hidden">
              <Box
                position="absolute"
                top={0}
                right={0}
                w="20"
                h="20"
                mt="-5"
                mr="-5"
                borderRadius="full"
                opacity={0.1}
                bg={item.color}
              />
              <Box position="relative" zIndex={10}>
                <Flex align="center" mb={2}>
                  <Box w={3} h={3} borderRadius="full" mr={2} bg={item.color} />
                  <Text fontWeight="medium">{item.name}</Text>
                </Flex>

                <Flex justify="space-between" align="flex-end" mb={2}>
                  <Box>
                    <Text fontSize="2xl" fontWeight="bold">{item.solved}</Text>
                    <Text fontSize="xs" color="gray.500">of {item.total}</Text>
                  </Box>
                  <Text fontSize="lg" fontWeight="semibold" color={item.color}>
                    {item.percentage}%
                  </Text>
                </Flex>

                <Progress
                  value={item.percentage}
                  size="xs"
                  colorScheme={
                    item.name === 'Easy' ? 'green' :
                      item.name === 'Medium' ? 'yellow' : 'red'
                  }
                />
              </Box>
            </Box>
          ))}
        </Grid>

        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <Box bg="white" p={4} borderRadius="lg" boxShadow="sm">
            <Text fontSize="sm" fontWeight="medium" color="gray.700" mb={3}>Distribution</Text>
            <Box h="56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={progressData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    className='profile-piechart'
                    height={250}
                    paddingAngle={0}
                    dataKey="solved"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {progressData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Box>

          <Box bg="white" p={4} borderRadius="lg" boxShadow="sm">
            <Text fontSize="sm" fontWeight="medium" color="gray.700" mb={3}>Completion Rate</Text>
            <Box h="56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={reversedProgressData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" scale="band" />
                  <Tooltip formatter={(value) => [`${value}%`, 'Completion']} />
                  <Bar dataKey="percentage" radius={[0, 4, 4, 0]}>
                    {reversedProgressData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Grid>
      </Stack>
    </Box>
  );
}

const css = {
  title: {
    fontSize: "22px",
    fontWeight: "500"
  },
}