  console.log("|||::::::::START HARE PART 01:::::::|||");

const hasMeeting = false;

// It's Return a Promise--->"resolve/reject"
const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10:00 PM"
        };
        //resolve(`${meetingDetails.name} will haild ${meetingDetails.location} AT ${meetingDetails.time}`);
        resolve(meetingDetails);
    }else{
        reject(new Error("Meeting already Schaduled!"));
    }
});

meeting
    .then((response) => {

        //console.log(response);
        console.log(response);
    })
    .catch((error) => {

        console.log(error);
    })



    console.log("<<<------------Last Line First Exicute---------->>>");