import { Box, Heading } from '@chakra-ui/react'
import Section from './section'

const Footer = () => {
  return (
    <Section delay={0.5}>
      <Heading as="h3" variant="section-title" mt={100}>
        Credits
      </Heading>
      <Box opacity={0.4} fontSize="sm">
        <p>
          <a href="https://skfb.ly/ooJO8">
            "Smol Ame in an Upcycled Terrarium [HololiveEn]
          </a>{' '}
          by Seafoam is licensed under{' '}
          <a
            href="
          http://creativecommons.org/licenses/by/4.0/"
          >
            Creative Commons Attribution.
          </a>
        </p>
        <p>
          "Juice Carton Shop" (https://skfb.ly/oGDQP) by Ergoni is licensed
          under{' '}
          <a
            href="
          http://creativecommons.org/licenses/by/4.0/"
          >
            Creative Commons Attribution.
          </a>
        </p>

        <Box align="center">
          This website is built based on the{' '}
          <a href="https://www.craftz.dog/" target="_blank">
            Takuya Matsuyama's website
          </a>
          .
        </Box>
        <Box align="center">
          <p>
            {' '}
            &copy; {new Date().getFullYear()} Monyvann. All Rights Reserved.
          </p>
        </Box>
      </Box>
    </Section>
  )
}

export default Footer
