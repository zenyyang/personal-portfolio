import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  padding: 10px;
  align-items: center;
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/logo1.png`

  return (
    <Link href="/">
      <LogoBox>
        <Image src={footPrintImg} width={40} height={50} alt="logo"></Image>
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
