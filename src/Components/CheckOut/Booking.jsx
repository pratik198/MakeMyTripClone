import React, { useEffect } from 'react';
import { projectid } from '../Common/Constants';

function Booking() {
    const url = "https://academics.newtonschool.co/api/v1/bookingportals/booking";

    async function book() {
        console.log("inside booking");
        try {
            const loggedInUserId = localStorage.getItem('token');
            if (!loggedInUserId) {
                console.error("User not authenticated");
                return;
            }

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${loggedInUserId}`,
                    projectID: projectid,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bookingType: 'hotel',
                }),
            });

            console.log(response);
            const data = await response.json();
            console.log(data);

            if (response.ok) {
                console.log("Booking successful");
            }
        } catch (error) {
            console.error("Error during booking:", error);
        }
    }

    useEffect(() => {
        book();
    }, []); 

    return <div>Booking</div>;
}

export default Booking;
