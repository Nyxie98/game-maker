type EList = {
    events: string[],
    style: {}
}

export default function EventList(props: EList) {
    return (
        <div style={props.style} className="dropdown__list">
            {props.events.map((ev) => (
                <div className="dropdown__list__element">
                    <p>{ev}</p>
                </div>
            ))}
        </div>
    )
}