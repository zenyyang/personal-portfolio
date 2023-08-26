import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box opacity={0.4} fontSize="sm">
      <p>
        "Low Poly Tree - Fall" (https://skfb.ly/6XpM8) by lucasbaze is licensed
        under Creative Commons Attribution
        (http://creativecommons.org/licenses/by/4.0/).
      </p>
      <p>
        "Juice Carton Shop" (https://skfb.ly/oGDQP) by Ergoni is licensed under
        Creative Commons Attribution
        (http://creativecommons.org/licenses/by/4.0/).
      </p>

      <Box align="center">
        This website is built based on the{' '}
        <a href="https://www.craftz.dog/" target="_blank">
          Takuya Matsuyama's website
        </a>
        .
      </Box>
      <Box align="center">
        <p> &copy; {new Date().getFullYear()} Monyvann. All Rights Reserved.</p>
      </Box>
    </Box>
  )
}

export default Footer
