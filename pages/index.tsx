import { SimpleGrid, Box, extendTheme } from '@chakra-ui/react'
import {
  Container,
  Heading,
  Stack,
  Text,
  Button
} from '@chakra-ui/react';
import Head from 'next/head';

export default function LandingPage() {
  return (
    <div style={{
      background: "linear-gradient(to left, rgb(121, 40, 202), rgb(255, 0, 128));",
    }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      
      <Container maxW={'3xl'}  h='calc(100vh)'>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Send NFT greetings to<br />
            <Text as={'span'} color={'gray.300'}>
              your loved ones
            </Text>
          </Heading>
          <Text color={'black.500'} fontSize={'xl'} as='b'>
            Create customized NFT as a greeting card and send it to your loved ones on scheduled date. You can create greeting NFT for any
            occasion like Birthday, Marriage Anniversary, or any custom occasion.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'blue.800'}
              rounded={'full'}
              px={6}
              size='lg'
              _hover={{
                bg: 'blue.600',
              }}>
              Send NFT Now
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}