import {
  FloatingArrow, arrow, offset, shift, useClick, useFloating, useFocus, useInteractions, useRole, useTransitionStyles, useDismiss, useId, FloatingOverlay, FloatingFocusManager, useHover, FloatingPortal,
} from "@floating-ui/react";
import { useRef, useState } from "react";
import './EventContent.css';

const dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
const EventContent = ({ data }: { data: any }) => {
  const [isPreview, setIsPreview] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef<any>(null);
  const tooltip = useFloating({
    open: isPreview,
    onOpenChange: setIsPreview,
    placement: "top",
    middleware: [
      shift(),
      arrow({
        element: arrowRef,
      }),
      offset(-5),
    ],
  });
  const tooltipFocus = useFocus(tooltip.context);
  const tooltipHover = useHover(tooltip.context);
  const tooltipRole = useRole(tooltip.context, { role: 'tooltip' });
  const /* { getReferenceProps, getFloatingProps } */ tooltipInteractions = useInteractions([
    tooltipFocus,
    tooltipHover,
    tooltipRole,
  ]);
  const tooltipStyles = useTransitionStyles(tooltip.context);

  const dialog = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "top",
    middleware: [
      shift(),
      offset(-5),
    ],
  });
  const dialogClick = useClick(dialog.context);
  const dialogDismiss = useDismiss(dialog.context, {
    outsidePressEvent: 'mousedown',
  });
  const dialogRole = useRole(dialog.context);

  const dialogInteractions = useInteractions([
    dialogClick,
    dialogDismiss,
    dialogRole,
  ]);
  const labelId = useId();
  const descriptionId = useId();

  const { event } = data;

  let day = new Date(event.start).getDay();
  let date = new Date(event.start).getDate();
  let month = new Date(event.start).getMonth();
  let start = new Date(event.start).getHours();
  let end = new Date(event.end).getHours();
  const startIsPm = Math.floor(start / 12) ? true : false;
  const endIsPm = Math.floor(end / 12) ? true : false;
  start = start % 12;
  end = end % 12

  return (
    <>
      <div
        className="h-100"
        ref={dialog.refs.setReference}
        {...dialogInteractions.getReferenceProps()}
      >
        <div className="custom-event"
          ref={tooltip.refs.setReference}
          {...tooltipInteractions.getReferenceProps()}
        >
          <div className="event-main">
            <b>{start}{startIsPm ? 'pm' : 'am'} - {end}{endIsPm ? 'pm' : 'am'}</b><br></br>
            <label className="fc-event-title">{event.title}</label>
          </div>
        </div>
      </div >
      {
        isPreview &&
        <div
          ref={tooltip.refs.setFloating}
          style={{ ...tooltip.floatingStyles, ...tooltipStyles }}

          {...tooltipInteractions.getFloatingProps()}
          className="tooltipContent"
        >
          {event.extendedProps.content}

          <FloatingArrow ref={arrowRef} context={tooltip.context} className="event-arrow" rotate='45deg' />
        </div>
      }
      {
        isOpen &&
        <FloatingPortal>
          <FloatingOverlay
            lockScroll
            className="dialogOverlay"
          >
            <FloatingFocusManager context={dialog.context}>
              <div
                className="dialog"
                ref={dialog.refs.setFloating}
                aria-labelledby={labelId}
                aria-describedby={descriptionId}
                {...dialogInteractions.getFloatingProps()}
              >
                <div className="d-flex justify-content-between">
                  <div className="div">
                    <h2 id={labelId} className="mb-0">
                      Clase {event.extendedProps.sesionNumber}. {event.title}
                    </h2>
                    <h4 className="badge bgMain">
                      {dayNames[day]} {date} de {monthNames[month]} {start}{startIsPm ? 'pm' : 'am'} - {end}{endIsPm ? 'pm' : 'am'}</h4>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="btn btn-sm btn-icon btn-light btnClose ms-3">
                    <i className="ti ti-x"></i>
                  </button>
                </div>
                <p id={descriptionId} className="dialogContent">
                  {event.extendedProps.content}
                </p>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      }
    </>
  );
}

export default EventContent;