// async function helloWord() {
//     return "Hello World";
// }

// console.log(helloWord());


const hasMeeting = true;

const meeting  = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 AM'
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("Meeting is  already scheduled!"));
    }
});

const addToCalendar = (meetingDetails) => {
        const calendar = `${meetingDetails.name} is scheduled in ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calendar); // this short hand can be used to return a promise
}

// meeting
//     .then(addToCalendar)
//     .then((calendar) => console.log(calendar))
//     .catch((err) => console.log(`Error is: ${err.message}`))


async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
    } catch (err) {
        console.log(`Error is: ${err.message}`);
    }
}

myMeeting();