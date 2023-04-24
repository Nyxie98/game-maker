import { useState } from "react"
import EventList from "./eventlist";
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'

export default function EventBlock() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <div className="grid grid__sm dropdown__container dropdown__toggle" onClick={() => setIsOpen(!isOpen)}>
                <h4>Test Event</h4>
                <p className="grid grid__center">A test event block</p>
                <p className="grid grid__right">{isOpen ? <BsChevronUp /> : <BsChevronDown />}</p>
            </div>
            <EventList style={{display:(isOpen?"":"none")}} events={["Test1", "Test2"]} />
        </>
    )
}