import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import Virlia from '../public/images/works/virlia-square.png'
import CEL from '../public/images/works/cel-bots.png'
import LMS from '../public/images/works/LMS-square.png'
import Cafe from '../public/images/works/cafe-square.png'
import Ecommerce from '../public/images/works/ecommerce-main-square.png'
import Dashboard from '../public/images/works/db-main-square.png'
import Journally from '../public/images/works/journally-square.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mt={10} mb={10}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem id="journally" title="Journally" thumbnail={Journally}>
            Journally is an AI-powered journaling website.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="dashboard"
            title="Ecommerce-Dashboard"
            thumbnail={Dashboard}
          >
            Ecommerce-Dashboard is a dashboard for the ecommerce website.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="ecommerce"
            title="Virlia-Ecommerce"
            thumbnail={Ecommerce}
          >
            Virlia-Ecommerce is a prototype website for any seller that want to
            have their own ecommerce website.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="cafe" title="Comfort喫茶 " thumbnail={Cafe}>
            Comfort喫茶 is a virtual cafe, where you can chill, relax and listen
            to lofi music.
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem id="virlia" title="Virlia" thumbnail={Virlia}>
            Virlia is a startup focused on utilizing AI technology to enhance
            customer service.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="cel" title="CEL-Bot" thumbnail={CEL}>
            A python Discord bot for CEL specializes in match VETO for VALORANT
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            id="lms"
            title="Library Management System"
            thumbnail={LMS}
          >
            A Java CRUD program to management a library with GUI and Excel
            sheet.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
// export { getServerSideProps } from '../components/chakra'
