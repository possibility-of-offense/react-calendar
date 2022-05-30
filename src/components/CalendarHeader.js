export default function CalendarHeader(props) {
  return (
    <header className="calendar__header" style={props.styling}>
      {props.children}
    </header>
  );
}
