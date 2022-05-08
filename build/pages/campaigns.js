// Next.js Imports
import Link from 'next/link'

// React Imports
import React, { useEffect, useState } from 'react';

// Components
import Title from "../components/Title.js"
import Campaign from "../components/Campaign.js"
import {CampaignList, CampaignLaunch } from '../components/CampaignList.js';

// Styles
import styles from '../styles/Common.module.css'

// WebSocket Related Imports
import io from 'socket.io-client';


export default function Campaigns() {
    // Connect the socket
    const [socket, setSocket] = useState(null);
    useEffect(() => {
      const newSocket = io(`wss://backend.infra-push.com:443`);
      setSocket(newSocket);
      return () => newSocket.close();
    }, [setSocket]);
    
    return (
        <>
            <div className={styles.container}>            
                <Title title="Campaigns" Style="background: white"/>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <div className={styles.grid}>
                            <Title title="All" />
                        </div>
                        <div className={styles.grid}>
                            {/* Test connection then call out to get campaigns */}
                            { socket ? (<CampaignList socket={socket} />) : (<></>)}
                        </div>
                    </div>
                    <div>
                        <div className={styles.grid}>
                            <Title title="Selected" />
                        </div>
                        <div className={styles.grid}>
                            <p>The selected campaign will be here</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.grid}>
                            <Title title="Preview" />
                        </div>
                        <div className={styles.grid}>
                            <p>The cammpane preview will be here</p>
                        </div>
                        <div className={styles.grid}>
                            <CampaignLaunch />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}