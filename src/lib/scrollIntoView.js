import isElementOffScreen from './isElementOffScreen';
/**
 * Attempt to make this option visible. Called from parent
 */
export default function scrollIntoView(element) {
  const scrollIntoViewOptions = { behavior: 'smooth', block: 'end', inline: 'nearest' };
  const isOffScreen = isElementOffScreen(element);

  // Both scrollIntoViewIfNeeded and scrollIntoView are not 100% supported.
  // scrollIntoViewIfNeeded works with Chrome and Safari
  // More info: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoViewIfNeeded
  if (typeof element.scrollIntoViewIfNeeded === 'function') {
    element.scrollIntoViewIfNeeded();
    return;
  }

  // scrollIntoView works with all other browsers
  // if element isOffScreen then scrollIntoView will fire
  // SHIPWATCH-1504
  // More info: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  if (isOffScreen && typeof element.scrollIntoView === 'function') {
    element.scrollIntoView(false, scrollIntoViewOptions);
    return;
  }
}
