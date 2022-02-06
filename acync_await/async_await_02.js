console.log("|||::::::::START HARE PART 02:::::::|||");


const hasMeeting2 = false;

// It's Return a Promise--->"resolve/reject"
const meeting2 = new Promise((resolve, reject) => {
    if(!hasMeeting2) {
        const meetingDetails2 = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10:00 PM"
        };
        resolve(meetingDetails2);
    }else{
        reject(new Error("Meeting already Schaduled!"));
    }
});

// meetingDetails2 paramiter get value from Promise--> "resolve"
const addToCalender = (meetingDetails2) => {
    const calender = `--> ${meetingDetails2.name} has been schdued on ${meetingDetails2.location} at ${meetingDetails2.time}`;
    //console.log(calender)
    return Promise.resolve(calender);
}

meeting2
    .then(addToCalender)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {

        console.log(error);
    })
