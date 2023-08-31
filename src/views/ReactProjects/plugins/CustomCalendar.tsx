import { createPlugin } from "fullcalendar/index.js";

export default createPlugin({
  views: {
    custom: {
      type: 'multiMonthYear',
      viewTitle: (props: any) => {
        return <div className='view-title'>
          HOLA
          {props.dateProfile.currentRange.start.toUTCString()}
        </div>
      }
    },
  },
  name: ""
});