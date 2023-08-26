import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Button,
  List,
  ListItem
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragrapgh'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I'm a software developer based in Cambodia!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Monyvann (Zen様)
            </Heading>
            <p>Your Friendly Neighborhood Programmer (Full-Stack Developer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/luffy.jpg"
              alt="Profile Image"
            ></Image>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I'm a software developer with over 2 years of experience in
            developing high-quality software solutions. I am a sophomore
            pursuing a Computer Science Major, and currently working on a SaaS
            called{' '}
            <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
              Virlia
            </Link>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My projects
            </Button>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2003</BioYear>
            Born in Phnom Penh, Cambodia.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed the Associate Program at
            <Link href="https://cambodia.itstep.org/">
              {' '}
              IT Step Academy{' '}
            </Link>{' '}
            in Software Development.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduated Highschool (端华学校).
          </BioSection>
          <BioSection>
            <BioYear>2022 - Present</BioYear>
            Attending Bachelor of Science in Information Technology Management
            at
            <Link href="https://www.aupp.edu.kh/">
              {' '}
              American University of Phnom Penh
            </Link>
            .
          </BioSection>
          <BioSection>
            <BioYear>2022 - Present</BioYear>
            Attending Bachelor of Science in Computer Science at
            <Link href="https://www.fhsu.edu/">
              {' '}
              Fort Hays State University
            </Link>
            .
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Passionate
          </Heading>
          <Paragraph>
            Music,{' '}
            <Link href="https://www.tiktok.com/@zeennnn06?_t=8f7xD64ffpI&_r=1">
              {' '}
              Playing Instruments (Guitar and Piano)
            </Link>
            , Video Games, Codes, AI & Machine Learning
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Socials
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/zenyyang" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @zenyyang
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.discordapp.com/users/319471189301133322"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  @monyvann
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/zennyangg" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @zennyangg
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/monyvann-men-65b7a5260/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @monyvann-men
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/_monyvann_/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @_monyvann_
                </Button>
              </Link>
            </ListItem>
          </List>
          <Box align="left" my={4} ml={5}>
            <Button
              as={NextLink}
              href="mailto:monybun27@gmail.com"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              Email me
            </Button>
          </Box>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title" mt={100}>
            Credits
          </Heading>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
