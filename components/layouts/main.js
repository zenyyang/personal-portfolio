import Head from 'next/head'
import dynamic from 'next/dynamic.js'
import NavBar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog.js'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Monyvann - Homepage </title>
      </Head>

      <NavBar path={router.asPath}></NavBar>

      <Container maxW="container.md" pt={14}>
        <VoxelDog maxW="container.md"></VoxelDog>
        {children}
      </Container>
    </Box>
  )
}

export default Main
