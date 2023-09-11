import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Link,
  Icon
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragrapgh'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { BioSection, BioYear } from '../../components/bio'
import { BiLogoJava, bilogoe } from 'react-icons/bi'
import { RiFileExcel2Fill } from 'react-icons/ri'

const Work = () => (
  <Layout title="Library Management System">
    <Container>
      <Title>
        Library Management System <Badge>2023-</Badge>
      </Title>
      <P>A Java program for managing a library.</P>
      <List ml={4} my={4}>
        <ListItem></ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Technologies</Meta>
          <span>
            <Icon as={BiLogoJava} /> Java, <Icon as={RiFileExcel2Fill} /> Excel,
            SwingUI
          </span>
        </ListItem>
        <ListItem>
          <Meta>Status</Meta>
          <span> Finished </span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/zenyyang/LMS_java">
            https://github.com/zenyyang/LMS_java
          </Link>
        </ListItem>
      </List>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" mb={10}>
          Detail
        </Heading>
        <BioSection>
          <BioYear>Description - </BioYear>
          LMS was a final project I did for my Java Programming course in my
          Freshman year. It's a simple CRUD system where you can add, edit,
          remove author and books. It reads from an Excel Sheet.
        </BioSection>
      </Section>
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
