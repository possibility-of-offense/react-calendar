import "../styles/calendar.css";
import "../styles/calendar-header.css";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import React, { useMemo } from "react";

const daysActivities = {
  monday: {
    activities: [
      {
        start: "05:00",
        end: "08:00",
        type: "wash dishes",
      },
      {
        start: "10:00",
        end: "12:00",
        type: "wash1 dishes",
      },
      {
        start: "15:00",
        end: "17:00",
        type: "wash4444 dishes",
      },
    ],
  },
  tuesday: {
    activities: [
      {
        start: "05:00",
        end: "08:00",
        type: "wash dishes",
      },
    ],
  },
  wednesday: {
    activities: [
      {
        start: "05:00",
        end: "08:00",
        type: "wash dishes",
      },
    ],
  },
  thursday: {
    activities: [
      {
        start: "05:00",
        end: "08:00",
        type: "wash dishes",
      },
    ],
  },
  friday: {
    activities: [
      {
        start: "05:00",
        end: "08:00",
        type: "wash dishes",
      },
    ],
  },
  saturday: {
    activities: [
      {
        start: "05:00",
        end: "08:00",
        type: "wash dishes",
      },
    ],
  },
  sunday: {
    activities: [
      {
        start: "05:00",
        end: "08:00",
        type: "wash dishes",
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
