// src/components/Notification.tsx
import React from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface NotificationProps {
    id: string;
    title: string;
    message: string;
    read: boolean;
}

const Notification: React.FC<NotificationProps> = ({ id, title, message, read }) => {
    const markAsRead = async () => {
        const notificationRef = doc(db, 'notifications', id);
        await updateDoc(notificationRef, { read: true });
    };

    return (
        <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', background: read ? '#e0e0e0' : '#fff' }}>
            <h4>{title}</h4>
            <p>{message}</p>
            {!read && <button onClick={markAsRead}>Mark as Read</button>}
        </div>
    );
};

export default Notification;
