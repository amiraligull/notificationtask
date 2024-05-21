// src/components/NotificationSystem.tsx
import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Notification from './Notification';

interface NotificationData {
    id: string;
    title: string;
    message: string;
    read: boolean;
    timestamp: Timestamp;
}

const NotificationSystem: React.FC = () => {
    const [notifications, setNotifications] = useState<NotificationData[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'notifications'), (snapshot) => {
            const notificationsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as NotificationData[];
            setNotifications(notificationsData);
        });
        return () => unsubscribe();
    }, []);

    const addNotification = async (title: string, message: string) => {
        await addDoc(collection(db, 'notifications'), {
            title,
            message,
            read: false,
            timestamp: Timestamp.now()
        });
    };

    return (
        <div>
            <button onClick={() => addNotification("Notification 1", "This is the first notification")}>Button 1</button>
            <button onClick={() => addNotification("Notification 2", "This is the second notification")}>Button 2</button>
            <button onClick={() => addNotification("Notification 3", "This is the third notification")}>Button 3</button>
            {notifications.map((notif) => (
                <Notification
                    key={notif.id}
                    id={notif.id}
                    title={notif.title}
                    message={notif.message}
                    read={notif.read}
                />
            ))}
        </div>
    );
};

export default NotificationSystem;
