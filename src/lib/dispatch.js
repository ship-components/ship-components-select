/**
 * Create and send a change event to the parent
 */
'use strict';
export default function dispatch(el, fn) {

  // Generate a change event to let the parent know
  let customEvent = null;

  // Internet Explorer 6-11
  if (typeof (Event) !== 'function') {
    // CustomEvent polyfill for IE - https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
    // eslint-disable-next-line func-names
    (function() {
      if (typeof window.CustomEvent === 'function') {
        return false; //If not IE
      }

      function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      }

      CustomEvent.prototype = window.Event.prototype;

      window.CustomEvent = CustomEvent;
    })();
    customEvent = new CustomEvent('change', true, true);
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
