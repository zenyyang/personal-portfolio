import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  height: 40px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/sticker.webp`

  return (
    <Link href="/">
      <LogoBox>
        <Image src={footPrintImg} width={30} height={10} alt="logo"></Image>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="Bold"
          ml={2}
        >
          Monyvann
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
