import Head from 'next/head'
import dynamic from 'next/dynamic.js'
import NavBar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog.js'
import VoxelDogLoader from '../voxel-dog-loader'
import Footer from '../foot.js'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Monyvann's homepage" />
        <meta name="author" content="Monyvann" />
        <meta name="author" content="Monyvann" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title> Monyvann - Homepage </title>
      </Head>

      <NavBar path={router.asPath}></NavBar>

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
