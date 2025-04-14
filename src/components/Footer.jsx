import { Box, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import FooterIcon from '../assets/FooterIcon';
import Facebook from '../assets/Facebook';

const Footer = () => {
    return (
        <Box {...css.footer}>
            <Box className='container'>
                <SimpleGrid gap={'48px'} columns={5}>
                    <Box>
                        <FooterIcon />
                        <Text {...css.text}>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</Text>
                        <Flex gap={'22px'}>
                            <Link href='https://facebook.com'><Facebook /></Link>
                            <Link href='https://facebook.com'><Facebook /></Link>
                            <Link href='https://facebook.com'><Facebook /></Link>
                            <Link href='https://facebook.com'><Facebook /></Link>
                        </Flex>
                    </Box>
                    <Box>
                        <Heading {...css.name}>Product</Heading>
                        <Link {...css.link} href='#'>Features</Link>
                        <Link {...css.link} href='#'>Pricing</Link>
                        <Link {...css.link} href='#'>Case studies</Link>
                        <Link {...css.link} href='#'>Reviews</Link>
                        <Link {...css.link} href='#'>Updates</Link>
                    </Box>
                    <Box>
                        <Heading {...css.name}>Company</Heading>
                        <Link {...css.link} href='#'>About</Link>
                        <Link {...css.link} href='#'>Contact us</Link>
                        <Link {...css.link} href='#'>Careers</Link>
                        <Link {...css.link} href='#'>Culture</Link>
                        <Link {...css.link} href='#'>Blog</Link>
                    </Box>
                    <Box>
                        <Heading {...css.name}>Support</Heading>
                        <Link {...css.link} href='#'>Getting started</Link>
                        <Link {...css.link} href='#'>Help center</Link>
                        <Link {...css.link} href='#'>Server status</Link>
                        <Link {...css.link} href='#'>Report a bug</Link>
                        <Link {...css.link} href='#'>Chat support</Link>
                    </Box>
                    <Box>
                        <Heading {...css.name}>Contacts us</Heading>
                        <Link {...css.link} href='mailto:contact@company.com'>contact@company.com</Link>
                        <Link {...css.link} href='tel:4146875892'>(414) 687 - 5892</Link>
                        <Link {...css.link} href='#'>794 Mcallister St
                            San Francisco, 94102</Link>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default Footer;

const css = {
    footer: {
        background: "#315AEC",
        paddingTop: "120px",
        paddingBottom: "96px"
    },
    name: {
        fontSize: "20px",
        lineHeight: "22px",
        color: "#fff",
        fontWeight: "700",
        marginBottom: "40px"
    },
    link: {
        fontSize: "18px",
        lineHeight: "20px",
        color: "#fff",
        fontWeight: "400",
        display: "block",
        margin: "18px 0"
    },
    text: {
        fontSize: "16px",
        lineHeight: "30px",
        color: "#fff",
        fontWeight: "400",
        margin: "24px 0"
    }
}