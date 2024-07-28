import React from 'react';
import SuprSendInbox from '@suprsend/react-inbox';
import { HiBellSnooze } from "react-icons/hi2";
import 'react-toastify/dist/ReactToastify.css';

const NotificationInbox = () => {
    const workspaceKey = import.meta.env.VITE_SUPRSEND_WORKSPACE_KEY ;
    const subscriberId = "123456789"; 
    const distinctId = "ashu@gmail.com"; 


    if (!workspaceKey) {
        console.error('SuprSend workspace key is not set.');
        return <p>Error: SuprSend workspace key is not set.</p>;
    }

    return (
        
                <SuprSendInbox 
                    bellComponent={() => <p className='text-4xl'><HiBellSnooze /></p>}
                    workspaceKey={workspaceKey} 
                    subscriberId={subscriberId} 
                    distinctId={distinctId} 
                />
    );
};

export default NotificationInbox;
