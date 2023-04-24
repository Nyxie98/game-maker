import EventBlock from "@/components/eventblock";

export default function gamemaker() {
  return (
    <div className="grid grid__main">
      <div className="grid grid__center grid__canvas">
        <canvas style={{backgroundColor:"white"}} width="800" height="600" />
      </div>
      <div className="menu grid__eventmenu">
        <h3 className="padding__sm">Events</h3>
        <EventBlock />
        <EventBlock />
        <EventBlock />
      </div>
      <div className="menu grid__itmenu">
        <h3 className="padding__sm">Objects</h3>
      </div>
    </div>
  )
}
