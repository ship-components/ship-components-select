/**
 * Find out if dropdown is offscreen
 * @param {object} el
 * @returns {bool}
 */
export default function isElementOffScreen(el) {
  // Get the ul element
  const elParent = el.offsetParent;
  const rect = elParent.getBoundingClientRect();

  return (
    rect.x + rect.width < 0
    || rect.y + rect.height < 0
    || (rect.x + elParent.clientWidth > window.innerWidth || rect.y + elParent.clientHeight > window.innerHeight)
  );
}
