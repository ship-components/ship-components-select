/**
 * Create and send a change event to the parent
 */
'use strict';
export default function dispatch(el, fn) {

  // Generate a change event to let the parent know
  let customEvent = null;

  // Internet Explorer 6-11
  if (/*@cc_on!@*/false || !!document.documentMode) {
    customEvent = document.createEvent('Event');
    customEvent.initMouseEvent('change',true,true,window,0,0,0,0,0,false,false,false,false,0,null);
  } else {
    // Other browsers
    customEvent = new Event('change');
  }

  // Calls parent change function with the custom event and the right target
  let handler = function handler(ev) {
    // Clean up
    el.removeEventListener('change', handler);

    if (typeof fn === 'function') {
      // Call
      fn.call(ev, ev);
    }
  };

  // Attach
  el.addEventListener('change', handler);

  // Trigger
  el.dispatchEvent(customEvent);
}
