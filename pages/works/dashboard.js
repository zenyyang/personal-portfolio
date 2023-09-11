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
import { WorkGridItem } from '../../components/grid-item'
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandPrisma,
  TbBrandTypescript
} from 'react-icons/tb'

import DBmain from '../../public/images/works/dashboard-main.png'
import DBbillboard from '../../public/images/works/dashboard-billboard.png'
import DBcate from '../../public/images/works/dashboard-cate.png'
import DBsize from '../../public/images/works/dashboard-size.png'
import DBcolor from '../../public/images/works/dashboard-color.png'
import DBproducts from '../../public/images/works/dashboard-product.png'
import DBstore from '../../public/images/works/dashboard-store.png'
import DBorder from '../../public/images/works/dashboard-order.png'
import DBlogin from '../../public/images/works/dashboard-login.png'

const Work = () => (
  <Layout title="Cafe">
    <Container>
      <Title>
        Dashboard <Badge>2023-</Badge>
      </Title>
      <P>
        <Link href="https://virlia-dashboard.vercel.app" target="_blank">
          Ecommerce-Dashboard
        </Link>{' '}
        is a dashboard for managing the ecommerce website. It has the many of
        the most basic features include dashboard for total revenue, total
        orders, total products, etc. It also has the CRUD features for managing
        products, categories, sizes, colors, orders, etc. It has API for the
        ecommerce website to fetch data from.
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
          <span> TBC </span>
        </ListItem>
      </List>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" mb={10}>
          Images
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={4}>
          <Section delay={0.1}>
            <WorkGridItem id="dbmain" thumbnail={DBmain}></WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="dbbillboard"
              thumbnail={DBbillboard}
            ></WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem id="dbstore" thumbnail={DBstore}></WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem id="dblogin" thumbnail={DBlogin}></WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem id="dbcate" thumbnail={DBcate}></WorkGridItem>
          </Section>
          <Section delay={0.7}>
            <WorkGridItem id="dbsize" thumbnail={DBsize}></WorkGridItem>
          </Section>
          <Section delay={0.8}>
            <WorkGridItem id="dbcolor" thumbnail={DBcolor}></WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem id="dbproduct" thumbnail={DBproducts}></WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem id="dborder" thumbnail={DBorder}></WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
