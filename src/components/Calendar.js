import "../styles/calendar.css";
import "../styles/calendar-header.css";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import React, { useMemo } from "react";

const daysActivities = {
  monday: {
    activities: [
      {
        start: "07:00",
        end: "08:00",
        type: "Walk the dog",
        description: "Should walk the dog | Should feed the dog",
      },
      {
        start: "10:00",
        end: "12:00",
        type: "Study",
        description:
          "Should study React | Should study Python | Should passing courses",
      },
      {
        start: "15:00",
        end: "17:00",
        type: "Meditate",
        description: "Should meditate | Should train",
      },
    ],
  },
  tuesday: {
    activities: [
      {
        start: "07:00",
        end: "08:00",
        type: "Walk the dog",
        description: "Should walk the dog | Should feed the dog",
      },
      {
        start: "10:00",
        end: "12:00",
        type: "Study",
        description:
          "Should study React | Should study Python | Should passing courses",
      },
    ],
  },
  wednesday: {
    activities: [
      {
        start: "07:00",
        end: "08:00",
        type: "Walk the dog",
        description: "Should walk the dog | Should feed the dog",
      },
      {
        start: "10:00",
        end: "12:00",
        type: "Study",
        description:
          "Should study React | Should study Python | Should passing courses",
      },
    ],
  },
  thursday: {
    activities: [
      {
        start: "07:00",
        end: "08:00",
        type: "Walk the dog",
        description: "Should walk the dog | Should feed the dog",
      },
      {
        start: "20:00",
        end: "22:00",
        type: "Jogging",
        description: "Should train | Should eat healty | Should read",
      },
    ],
  },
  friday: {
    activities: [
      {
        start: "07:00",
        end: "08:00",
        type: "Walk the dog",
        description: "Should walk the dog | Should feed the dog",
      },
    ],
  },
  saturday: {
    activities: [
      {
        start: "07:00",
        end: "08:00",
        type: "Walk the dog",
        description: "Should walk the dog | Should feed the dog",
      },
      {
        start: "18:00",
        end: "20:00",
        type: "Having fun",
        description: "Should having fun working with React",
      },
    ],
  },
  sunday: {
    activities: [
      {
        start: "06:00",
        end: "08:00",
        type: "Walk the dog",
        description: "Should walk the dog | Should feed the dog",
      },
    ],
  },
};

export const DaysActivitiesContext = React.createContext(daysActivities);

function Calendar() {
  const styling = useMemo(() => {
    return {
      padding: ".5em",
      fontSize: "1.4em",
      borderBottom: "1px solid #ddd",
    };
  }, []);

  return (
    <section className="calendar">
      <CalendarHeader styling={styling}>
        <h4>Calendar</h4>
      </CalendarHeader>
      <DaysActivitiesContext.Provider value={daysActivities}>
        <CalendarBody daysActivities={daysActivities} />
      </DaysActivitiesContext.Provider>
    </section>
  );
}

export default Calendar;
