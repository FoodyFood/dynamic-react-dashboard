// React Imports
import React, { useEffect, useState } from 'react';

// Components
// import Campaign from "../components/Campaign.js"

// Styles
import '../styles/Common.module.css';
import Campaign from './Campaign';


export function CampaignList({ socket }) {
  const [campaigns, setCampaigns] = useState({});
    
  
  useEffect(() => {
    // Functions
    const notificationListener = (recievedPacket) => {
      setCampaigns(() => {
        // Parse The Packet To a JSON Object
        var recievedData = JSON.parse(recievedPacket);

        // Print some parts to console for testing
        console.log(recievedData);

        // Extract Campaign
        var extracted_campaigns = JSON.parse(recievedData.message).Campaigns;
        console.log(extracted_campaigns)
        return extracted_campaigns; // Returns campaign for now, should return full object
      });
    };
    
    // Funnctions Triggers
    socket.on('notification', notificationListener);
    
    // Fetch the customers data
    socket.emit('token', "BF2FAD14");
    
    return () => {
      socket.off('notification', notificationListener);
    };
  }, [socket]);
  

  return (
    <div>
      {[...Object.values(campaigns)]
        .sort((a, b) => a.time - b.time)
        .map((campaign) => (
          <Campaign 
            CampaignName={campaign.CampaignName} 
            CampaignDescription={campaign.CampaignDescription}
          />
        ))
      }
    </div>
  );
}


export const CampaignLaunch = ({socket}) => {
  const [value, setValue] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit('token', value);
    setValue('');
  };
  return (
    <form onSubmit={submitForm}>
      <button
        type="button"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      >
        Launch Campaign
      </button>
    </form>
  );
};
