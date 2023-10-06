import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Icon,
  SimpleGrid,
  Link
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragrapgh'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem, WorkGridPicture } from '../../components/grid-item'
import {
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandTailwind,
  TbBrandTypescript
} from 'react-icons/tb'

import Playground from '../../public/images/works/journally-playground.png'
import Table from '../../public/images/works/journally-table.png'
import Tone from '../../public/images/works/journally-tone.png'
import Journally from '../../public/images/works/journally.png'

const Work = () => (
  <Layout title="Journally">
    <Container>
      <Title>
        Journally <Badge>2023</Badge>
      </Title>
      <P>
        <Link href="https://journallyy.vercel.app" target="_blank">
          Journally
        </Link>{' '}
        is an AI-powered journaling website designed to help individuals reflect
        on their daily lives, set and achieve goals, and gain insights into
        their personal growth and well-being through journaling.
      </P>
      <List ml={4} my={4}>
        <ListItem></ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Technologies</Meta>
          <span>
            <Icon as={TbBrandNextjs} />
            <span> </span>Next.js, <Icon as={TbBrandTypescript} />
            <span> </span>Typescript, <Icon as={TbBrandTailwind} />
            <span> </span>Tailwind, <Icon as={TbBrandPrisma} />
            <span> </span>Prisma,
          </span>
        </ListItem>
        <ListItem>
          <Meta>Status</Meta>
          <span> Finished </span>
        </ListItem>
      </List>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" mb={10}>
          Images
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridPicture thumbnail={Journally}></WorkGridPicture>
          </Section>
          <Section delay={0.2}>
            <WorkGridPicture thumbnail={Tone}></WorkGridPicture>
          </Section>
          <Section delay={0.3}>
            <WorkGridPicture thumbnail={Playground}></WorkGridPicture>
          </Section>
          <Section delay={0.4}>
            <WorkGridPicture thumbnail={Table}></WorkGridPicture>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
