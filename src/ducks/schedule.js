import schedule from "./../data/schedule";

export const TOGGLE_STARS = "schedule/TOGGLE_STARS";

const defaultState = schedule;

export default (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_STARS: {
            const newState = Object.assign({}, state);
            const talkLocation = helperToggleStars(state, action.payload.talk);
            if (talkLocation) {
                newState.days[talkLocation.day].timeslots[
                    talkLocation.timeslot
                ].talks[talkLocation.talk].stars =
                    action.payload.stars;
            }

            return newState;
        }
        default:
            return state;
    }
};

function helperToggleStars(schedule, receivedTalk) {
    let talkLocation;
    schedule.days.forEach((day, dayIndex) => {
        day.timeslots.forEach((timeslot, timeslotIndex) => {
            timeslot.talks.forEach((talk, talkIndex) => {
                if (talk.id === receivedTalk.id) {
                    talkLocation = {
                        day: dayIndex,
                        timeslot: timeslotIndex,
                        talk: talkIndex
                    };
                }
            });
        });
    });
    return talkLocation;
}

export const toggleStars = (talk, stars) => {
    return {
        type: TOGGLE_STARS,
        payload: {
            talk: talk,
            stars: stars
        }
    }
}
