export const sizingGuide = () => {
  const windowSize = window.document.body.offsetWidth;

  let sizingResult;
  switch (true) {
    case windowSize >= 1440:
      sizingResult = 'xl';
      break;
    case windowSize >= 1100 && windowSize < 1439:
      sizingResult = 'lg';
      break;
    case windowSize >= 900 && windowSize < 1100:
      sizingResult = 'md';
      break;
    case windowSize >= 700 && windowSize < 900:
      sizingResult = 'sm';
      break;
    case windowSize < 700:
      sizingResult = 'xs';
      break;
  }
  return [sizingResult, windowSize];
}