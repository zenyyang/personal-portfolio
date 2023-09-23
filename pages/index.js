import {
  useColorModeValue,
  Container,
  Box,
  Heading,
  Image,
  Link,
  Icon,
  Button,
  List,
  ListItem
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragrapgh'
import Tools from '../components/tools'
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
import { TypeAnimation } from 'react-type-animation'

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
          <TypeAnimation
            sequence={[
              "I'm a full-stack developer based in Cambodia, សួស្ដី!",
              1500,
              "I'm a full-stack developer based in Cambodia, Hello!",
              1500,
              "I'm a full-stack developer based in Cambodia, こんにちは!",
              1500,
              "I'm a full-stack developer based in Cambodia, 你好!",
              1500,
              "I'm a full-stack developer based in Cambodia, 안녕하세요!",
              1500
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: '1em',
              display: 'inline-block',
              fontWeight: 450
            }}
            repeat={Infinity}
          />
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1} fontSize={20}>
            <Heading as="h2" variant="page-title">
              Monyvann (Zen様)
            </Heading>
            <p>Your Friendly Neighborhood Programmer </p>
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
            <Link
              as={NextLink}
              href="/works/inkdrop"
              target="_blank"
              passHref
              scroll={false}
            >
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
              colorScheme={useColorModeValue('teal', 'pink')}
            >
              My projects
            </Button>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Biography
          </Heading>
          <BioSection>
            <BioYear>2003</BioYear>
            Born in Phnom Penh, Cambodia.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed the Associate Program at
            <Link href="https://cambodia.itstep.org/" target="_blank">
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
            <Link href="https://www.aupp.edu.kh/" target="_blank">
              {' '}
              American University of Phnom Penh
            </Link>
            .
          </BioSection>
          <BioSection>
            <BioYear>2022 - Present</BioYear>
            Attending Bachelor of Science in Computer Science at
            <Link href="https://www.fhsu.edu/" target="_blank">
              {' '}
              Fort Hays State University
            </Link>
            .
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <BioSection>
            <BioYear>Snoopedu (May 2023 - July 2023)</BioYear>
          </BioSection>
          <BioSection>
            <BioYear>Programming Facilitator:</BioYear>
            <br />- Instructed students aged 10-14 in micro:bit programmer and
            block coding. <br />- Design and delivered engaging lessons to
            introduce foundational programming concepts. <br />- Assisted
            students in developing coding skills through hands-on projects and
            activities. <br />- Mentored and guided students in building and
            debugging their own projects.
          </BioSection>
          <br />
          <BioSection>
            <BioYear>Freelance (2019 - 2021)</BioYear>
          </BioSection>
          <BioSection>
            <BioYear>Software Developer: </BioYear>
            <br />- Successfully completed various projects using multiple
            programming languages, including C++, C#, Java, and Python. <br />-
            Developed code segments and implemented solutions for client
            projects, ensuring they met all project requirements and delivered
            expected results.
            <br />- Consistently achieved both short-term and long-term project
            goals, demonstrating strong project management and problem-solving
            skills.
            <br />- Demonstrated flexibility in adapting to different
            programming languages and frameworks as per project requirements.
          </BioSection>
          <br />
          <BioSection>
            <BioYear>Freelance (2015 - 2017)</BioYear>
          </BioSection>
          <BioSection>
            <BioYear>IT Assistant:</BioYear>
            <br />- Proficient in Microsoft Office Suite, including Word and
            Excel, with experience in creating and editing documents and
            spreadsheets to support various office tasks.
            <br />- Experienced in using Adobe software, including Photoshop for
            graphic design and image editing, contributing to marketing and
            promotional materials.
            <br />- Assisted in troubleshooting and resolving IT issues for
            colleagues, providing technical support for software-related
            problems.
          </BioSection>
        </Section>
        <br />
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Tools & Languages
          </Heading>
          <Tools />
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
                  colorScheme={useColorModeValue('teal', 'pink')}
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
                  colorScheme={useColorModeValue('teal', 'pink')}
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
                  colorScheme={useColorModeValue('teal', 'pink')}
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
                  colorScheme={useColorModeValue('teal', 'pink')}
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
                  colorScheme={useColorModeValue('teal', 'pink')}
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @_monyvann_
                </Button>
              </Link>
            </ListItem>
          </List>
          <Box align="left" my={4} ml={4}>
            <Button
              as={NextLink}
              href="mailto:monybun27@gmail.com"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme={useColorModeValue('teal', 'pink')}
              target="_blank"
            >
              Email me
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
