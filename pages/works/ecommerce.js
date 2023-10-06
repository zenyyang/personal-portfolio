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
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandPrisma,
  TbBrandTypescript
} from 'react-icons/tb'

import ECDetail from '../../public/images/works/ecommerce-detail.png'
import ECProducts from '../../public/images/works/ecommerce-products.png'
import ECCheckout from '../../public/images/works/ecommerce-checkout.png'
import ECMain from '../../public/images/works/ecommerce-main.png'

const Work = () => (
  <Layout title="Cafe">
    <Container>
      <Title>
        Ecommerce <Badge>2023-</Badge>
      </Title>
      <P>
        <Link href="https://virlia-store.vercel.app" target="_blank">
          Virlia-Ecommerce
        </Link>{' '}
        is a prototype E-Commerce website for any seller that want to have their
        own ecommerce website. It has the most basic features of an ecommerce
        website such as: product listing, product detail, cart, checkout,
        payment, order history, etc.
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
          <Meta>Github</Meta>
          <span>
            {' '}
            <Link
              href="https://github.com/zenyyang/e-commerce-store"
              target="_blank"
            >
              Virlia-Ecommerce
            </Link>{' '}
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
            <WorkGridPicture id="ecmain" thumbnail={ECMain}></WorkGridPicture>
          </Section>
          <Section delay={0.3}>
            <WorkGridPicture
              id="ecproduct"
              thumbnail={ECProducts}
            ></WorkGridPicture>
          </Section>
          <Section delay={0.4}>
            <WorkGridPicture
              id="ecdetail"
              thumbnail={ECDetail}
            ></WorkGridPicture>
          </Section>
          <Section delay={0.5}>
            <WorkGridPicture
              id="eccheckout"
              thumbnail={ECCheckout}
            ></WorkGridPicture>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
