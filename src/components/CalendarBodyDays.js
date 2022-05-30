import { useContext } from "react";
import { DaysActivitiesContext } from "./Calendar";
import CalendarBodyDay from "./CalendarBodyDay";

function findActivity(single, all) {
  for (let key in all) {
    if (key === single) {
      return all[key];
    }
  }
}

function findMaximumActivities(cont) {
  let max = 0;

  for (let key in cont) {
    if (cont[key].activities.length > max) {
      max = cont[key].activities.length;
    }
  }

  return max;
}

export default function CalendarBodyDays({ className }) {
  const activitiesContext = useContext(DaysActivitiesContext);
  const maxActivities = findMaximumActivities(activitiesContext);

  return (
    <main className={className}>
      <section className="calendar__hours">
        <div
          style={{
            height: "80px",
            borderBottom: "1px solid #ddd",
            padding: "20px 30px",
          }}
        ></div>
      </section>

      <section className="calendar__body--days">
        <CalendarBodyDay
          styling={{ gridTemplateRows: `repeat(${maxActivities}, 1fr)` }}
          activities={findActivity("monday", activitiesContext)}
          max={maxActivities}
          headerTheme="#FFBE0B"
        >
          Monday
        </CalendarBodyDay>
        <CalendarBodyDay
          styling={{ gridTemplateRows: `repeat(${maxActivities}, 1fr)` }}
          activities={findActivity("tuesday", activitiesContext)}
          max={maxActivities}
          headerTheme="#FB5607"
        >
          Tuesday
        </CalendarBodyDay>
        <CalendarBodyDay
          styling={{ gridTemplateRows: `repeat(${maxActivities}, 1fr)` }}
          activities={findActivity("wednesday", activitiesContext)}
          max={maxActivities}
          headerTheme="#FF006E"
        >
          Wednesday
        </CalendarBodyDay>
        <CalendarBodyDay
          styling={{ gridTemplateRows: `repeat(${maxActivities}, 1fr)` }}
          activities={findActivity("thursday", activitiesContext)}
          max={maxActivities}
          headerTheme="#8338EC"
        >
          Thursday
        </CalendarBodyDay>
        <CalendarBodyDay
          styling={{ gridTemplateRows: `repeat(${maxActivities}, 1fr)` }}
          activities={findActivity("friday", activitiesContext)}
          max={maxActivities}
          headerTheme="#3A86FF"
        >
          Friday
        </CalendarBodyDay>
        <CalendarBodyDay
          styling={{ gridTemplateRows: `repeat(${maxActivities}, 1fr)` }}
          activities={findActivity("saturday", activitiesContext)}
          max={maxActivities}
          headerTheme="#ACD8AA"
        >
          Saturday
        </CalendarBodyDay>
        <CalendarBodyDay
          styling={{ gridTemplateRows: `repeat(${maxActivities}, 1fr)` }}
          activities={findActivity("sunday", activitiesContext)}
          max={maxActivities}
          headerTheme="#00C2D1"
        >
          Sunday
        </CalendarBodyDay>
      </section>
    </main>
  );
}
