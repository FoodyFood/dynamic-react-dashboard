// Next.js  Imports
import Head from 'next/head'

// React Imports
import React, { useEffect, useState } from 'react';

// Components
import Navbar from '../components/Navbar.js'
import Sidebar from '../components/Sidebar.js'
import Footer from '../components/Footer.js'

// Styles
import '../styles/globals.css'

// WebSocket Related Imports
import io from 'socket.io-client';
import {Messages, NewMessage } from '../components/Messages.js';


function Dashboard({ Component, pageProps }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`wss://backend.infra-push.com:443`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <>
      <Head>
        <title>INFRA-PUSH</title>
        <meta name="description" content="infra-push" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <NewMessage socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}

      <Navbar/>

      <Sidebar />

      <Component {...pageProps} />

      {/* <Footer /> */}
    </>
  )
}

export default Dashboard
