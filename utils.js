export const isElementInView = (element, fullyInView = false) => {
  const isjQueryObjExists = (obj) => (
    $(obj).length !== 0
  )

  const pageTop = isjQueryObjExists(window) ? $(window).scrollTop() : 0
  const pageBottom = pageTop + (isjQueryObjExists(window) ? $(window).height() : 0)
  const elementTop = isjQueryObjExists(element) ? $(element).offset().top : 0
  const elementBottom = elementTop + (isjQueryObjExists(element) ? $(element).height() : 0);

  if (fullyInView === true) {
    return ((pageTop < elementTop) && (pageBottom > elementBottom));
  } else {
    return ((elementTop < pageBottom - 100) && (elementBottom > pageTop - 100));
  }
}
