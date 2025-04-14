import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import BitPayImage from '../assets/bitpay.png'
import BitcoinImage from '../assets/bitcoin.png'
import PayImage from '../assets/pay.png'
import StripeImage from '../assets/Stripe.png'
import VisaImage from '../assets/Visa.png'

const Partner = () => {
    return (
        <Box p={'48px 0'}>
            <Box className='container'>
                <SimpleGrid alignItems={'center'} gap={'24px'} columns={8}>
                    <Image src={BitPayImage} {...css.image} />
                    <Image src={BitcoinImage} {...css.image} />
                    <Image src={PayImage} {...css.image} />
                    <Image src={StripeImage} {...css.image} />
                    <Image src={VisaImage} {...css.image} />
                    <Image src={PayImage} {...css.image} />
                    <Image src={BitcoinImage} {...css.image} />
                    <Image src={BitPayImage} {...css.image} />
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default Partner;


const css = {
    image: {
        width: "120px",
        objectFit: "contain",
        height: "45px"
    }
}