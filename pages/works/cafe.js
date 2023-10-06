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
import { WorkGridPicture } from '../../components/grid-item'
import { SiChakraui } from 'react-icons/si'
import { TbBrandNextjs, TbBrandThreejs } from 'react-icons/tb'

import cafe1 from '../../public/images/works/cafe.png'
import cafe2 from '../../public/images/works/cafe-light.png'

const Work = () => (
  <Layout title="Cafe">
    <Container>
      <Title>
        Comfort喫茶 <Badge>2023-</Badge>
      </Title>
      <P>
        <Link href="https://comfort-cafe.vercel.app" target="_blank">
          Comfort喫茶
        </Link>{' '}
        is a virtual cafe, where you can chill, relax and listen to lofi music.
        There're also ambient sounds such as nature, and rain thunder and fire.
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
            <span> </span>Next.js, <Icon as={TbBrandThreejs} />
            <span> </span>
            Three.js, <Icon as={SiChakraui} /> <span> </span>ChakraUI
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
            <WorkGridPicture thumbnail={cafe1}></WorkGridPicture>
          </Section>
          <Section delay={0.3}>
            <WorkGridPicture thumbnail={cafe2}></WorkGridPicture>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
