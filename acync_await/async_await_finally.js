console.log("|||::::::::START HARE PART FINAL PART:::::::|||");

const hasMeeting = false;

// It's Return a Promise--->"resolve/reject"
const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10:00 PM"
        };
        resolve(meetingDetails);
    }else{
        reject(new Error("Meeting already Schaduled!"));
    }
});

// meetingDetails2 paramiter get value from Promise--> "resolve"
const addToCalender = (meetingDetails) => {
    const calender = `--> ${meetingDetails.name} has been schdued on ${meetingDetails.location} at ${meetingDetails.time}`;

    return Promise.resolve(calender);
}


async function myMeeting() {

    const meetingDetails = await meeting;
    const calender = await addToCalender(meetingDetails);

    console.log(meetingDetails);
    console.log(calender);
}

myMeeting();

console.log(`Last Line FIrst Print`);