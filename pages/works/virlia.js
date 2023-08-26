import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Icon
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragrapgh'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { BioSection, BioYear } from '../../components/bio'
import { IoLogoPython } from 'react-icons/io5'
import { BiLogoMongodb } from 'react-icons/bi'
import { TbBrandOpenai } from 'react-icons/tb'

const Work = () => (
  <Layout title="Virlia">
    <Container>
      <Title>
        Virlia <Badge>2024-</Badge>
      </Title>
      <P>
        Virlia is a startup that aims to revolutionize the customer service
        industry by utilizing AI technology to enhance the customer experience.
      </P>
      <List ml={4} my={4}>
        <ListItem></ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Software as a Service</span>
        </ListItem>
        <ListItem>
          <Meta>Technologies</Meta>
          <span>
            <Icon as={IoLogoPython} />
            Python, <Icon as={BiLogoMongodb} />
            MongoDB, <Icon as={TbBrandOpenai} /> OpenAI
          </span>
        </ListItem>
        <ListItem>
          <Meta>Status</Meta>
          <span> In Progress </span>
        </ListItem>
      </List>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Detail
        </Heading>
        <BioSection>
          <BioYear>Description - </BioYear>
          Provide businesses with a cutting-edge virtual assistant that can
          handle customer inquiries in a fast, efficient, and personalized
          manner. Provide businesses with a cutting-edge virtual assistant that
          can handle customer inquiries in a fast, efficient, and personalized
          manner.
        </BioSection>
        <BioSection>
          <BioYear>Industry - </BioYear>
          Currently, customer service can be time-consuming, expensive, and
          often involves long wait times for customers. However, Aimsphere aims
          to revolutionize customer service by providing an AI-powered virtual
          assistant that can handle customer inquiries in real-time, without the
          need for human intervention.
        </BioSection>
      </Section>
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
