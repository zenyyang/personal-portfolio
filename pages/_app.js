import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import Chakra from '../components/chakra'
import { AnimatePresence } from 'framer-motion'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const Website = ({ Component, pageProps, router }) => {
  return (
    <Chakra cookies={pageProps}>
      <Fonts />
      <Layout router={router}>
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} keys={router.route}></Component>
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
