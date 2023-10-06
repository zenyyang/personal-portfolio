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
import { SimpleGrid } from '@chakra-ui/react'
import { WorkGridPicture } from '../../components/grid-item'

import cel1 from '../../public/images/works/cel1.jpg'
import cel2 from '../../public/images/works/cel2.jpg'
import cel3 from '../../public/images/works/cel3.jpg'
import { BiLogoDiscord, BiLogoPython } from 'react-icons/bi'

const Work = () => (
  <Layout title="CEL - Discord BOT">
    <Container>
      <Title>
        CEL Discord BOT <Badge>2022-</Badge>
      </Title>
      <P>
        {' '}
        A Discord Bot created mainly for Cambodia Esport League Discord Server.
      </P>
      <List ml={4} my={4}>
        <ListItem></ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Discord</span>
        </ListItem>
        <ListItem>
          <Meta>Technologies</Meta>
          <span>
            <Icon as={BiLogoPython} /> Python, <Icon as={BiLogoDiscord} />{' '}
            Discord API
          </span>
        </ListItem>
        <ListItem>
          <Meta>Status</Meta>
          <span> Finished </span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/zenyyang/CEL">
            https://github.com/zenyyang/CEL
          </Link>
        </ListItem>
      </List>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" mb={10}>
          Detail
        </Heading>
        <BioSection>
          <BioYear>Description - </BioYear>
          Able to complete most of the basic commands such as
          <p> - create roles, voice chats, general chats</p>
          <p> - assign roles, voice chats, general chats</p>
          <p> - VETO for Valorant Tournaments</p>
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Images
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridPicture id="cel1" thumbnail={cel1}></WorkGridPicture>
          </Section>
          <Section delay={0.3}>
            <WorkGridPicture id="cel2" thumbnail={cel2}></WorkGridPicture>
          </Section>
          <Section delay={0.5}>
            <WorkGridPicture id="cel3" thumbnail={cel3}></WorkGridPicture>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
