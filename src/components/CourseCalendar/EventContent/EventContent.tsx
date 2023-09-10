import { FloatingArrow, arrow, offset, shift, useClick, useFloating, useFocus, useInteractions, useRole, useTransitionStyles } from "@floating-ui/react";
import { useRef, useState } from "react";
import './EventContent.css';

const EventContent = ({ data }: { data: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef<any>(null);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "top",
    middleware: [
      shift(),
      arrow({
        element: arrowRef,
      }),
      offset(-5),
    ],
  });
  const focus = useFocus(context);
  const click = useClick(context);
  const role = useRole(context, { role: 'tooltip' });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    focus,
    click,
    role,
  ]);
  const { styles } = useTransitionStyles(context);

  const { event } = data;

  let start = new Date(event.start).getHours();
  let end = new Date(event.end).getHours();
  const startIsPm = Math.floor(start / 12) ? true : false;
  const endIsPm = Math.floor(end / 12) ? true : false;
  start = start % 12;
  end = end % 12

  return (
    <>
      <div className="custom-event" ref={refs.setReference} {...getReferenceProps()}>
        <div className="event-main">
          <b>{start}{startIsPm ? 'pm' : 'am'} - {end}{endIsPm ? 'pm' : 'am'}</b><br></br>
          <label className="fc-event-title">{event.title}</label>
        </div>
      </div>
      {
        isOpen &&
        <div
          ref={refs.setFloating}
          style={{ ...floatingStyles, ...styles }}

          {...getFloatingProps()}
          className="event-content"
        >
          {event.extendedProps.content}

          <FloatingArrow ref={arrowRef} context={context} className="event-arrow" rotate='45deg' />
        </div>
      }
    </>
  );
}

export default EventContent;