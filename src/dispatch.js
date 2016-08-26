/**
 * Create and send a change event to the parent
 */
'use strict';
export default function dispatch(el, fn) {
  // Generate a change event to let the parent know
  let customEvent = new window.MouseEvent('change');

  // Calls parent change function with the custom event and the right target
  let handler = function(ev) {
    // Clean up
    el.removeEventListener('change', handler);

    if (typeof fn === 'function'){
      // Call
      fn.call(ev, ev);
    }
  };

  // Attach
  el.addEventListener('change', handler);

  // Trigger
  el.dispatchEvent(customEvent);
}
