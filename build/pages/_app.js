// Next.js  Imports
import Head from 'next/head'

// Components
import Navbar from '../components/Navbar.js'
import Sidebar from '../components/Sidebar.js'
import Footer from '../components/Footer.js'

// Styles
import '../styles/globals.css'


function Dashboard({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>INFRA-PUSH</title>
        <meta name="description" content="infra-push" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <Sidebar />

      <Component {...pageProps} />

      <Footer />
    </>
  )
}

export default Dashboard
