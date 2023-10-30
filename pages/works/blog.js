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
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandPrisma
} from 'react-icons/tb'

import blog1 from '../../public/images/works/blog-main.png'
import blog2 from '../../public/images/works/blog-db.png'
import blog3 from '../../public/images/works/blog-text.png'
import blog5 from '../../public/images/works/recent-blog.png'
import blog6 from '../../public/images/works/recent-new.png'
import { BioSection, BioYear } from '../../components/bio'

const Work = () => (
  <Layout title="Cafe">
    <Container>
      <Title>
        ZBlog<Badge>2023-</Badge>
      </Title>
      <P>
        <Link href="https://virlia-blog.vercel.app" target="_blank">
          ZBlog
        </Link>{' '}
        your gateway to the ever-evolving tech universe! Immerse yourself in a
        world where innovation meets insight. ZBlog is your go-to destination
        for in-depth explorations of cutting-edge technologies such as React and
        Next.js.
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
          Key Features
        </Heading>
        <BioSection>
          <BioYear>Landing Page Excellence - </BioYear>
          The ZBlog landing page is designed for readers seeking immersive
          content experiences. It offers an intuitive interface, allowing
          visitors to effortlessly navigate through an extensive collection of
          blogs, categorized by topics and themes.
        </BioSection>
        <BioSection>
          <BioYear>Owner Dashboard - </BioYear>
          ZBlog provides blog owners with a powerful dashboard. Owners can
          effortlessly add new blogs, create categories, and gain insights
          through an overview section. The dashboard acts as a control center,
          ensuring smooth management of content.
        </BioSection>
        <BioSection>
          <BioYear>Effortless Blog Creation - </BioYear>
          ZBlog revolutionizes the blog creation process with a Notion-like text
          editor. Users can craft compelling content using a simplified editor,
          akin to the popular Notion platform. This user-friendly approach
          empowers creators to focus on their ideas, making the content creation
          process seamless and enjoyable.
        </BioSection>
        <BioSection>
          <BioYear>Dynamic Category Management - </BioYear>
          Owners can categorize blogs effectively, enhancing user experience and
          content organization. Categories can be easily added, edited, or
          removed, ensuring that readers can explore content tailored to their
          interests.
        </BioSection>
        <BioSection>
          <BioYear>Comprehensive Overview - </BioYear>
          The dashboard offers owners a comprehensive overview of their blog's
          performance. This includes metrics such as reader engagement, popular
          categories, and trending topics. These insights empower owners to make
          data-driven decisions to enhance their blog's reach and impact.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" mb={10}>
          Images
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridPicture thumbnail={blog1}></WorkGridPicture>
          </Section>
          <Section delay={0.3}>
            <WorkGridPicture thumbnail={blog5}></WorkGridPicture>
          </Section>
          <Section delay={0.3}>
            <WorkGridPicture thumbnail={blog6}></WorkGridPicture>
          </Section>
          <Section delay={0.3}>
            <WorkGridPicture thumbnail={blog2}></WorkGridPicture>
          </Section>
          <Section delay={0.3}>
            <WorkGridPicture thumbnail={blog3}></WorkGridPicture>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
