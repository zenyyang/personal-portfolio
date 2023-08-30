import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import Virlia from '../public/images/works/virlia.jpg'
import CEL from '../public/images/works/cel-bot.png'
import LMS from '../public/images/works/LMS.png'
import Cafe from '../public/images/works/cafe.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mt={10}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="cafe" title="Comfort喫茶 " thumbnail={Cafe}>
            Comfort喫茶 is a virtual cafe, where you can chill, relax and listen
            to lofi music.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
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
