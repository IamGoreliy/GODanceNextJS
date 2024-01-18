import LayoutHomePage from '../layouts/navigation/homePagelayout';
import TitleSectionHomePage from '../sections/homePage/titleSectionHomePage';
import SectionDanceStyleCategory from '../sections/homePage/sectionDanceStyleCategory';
import { useLayoutEffect, useState } from 'react';


const Page = () => {
  const [size, setSize] = useState('');

  useLayoutEffect(() => {
    const sizeBody = window.document.body.offsetWidth;
    switch (true) {
      case sizeBody >= 1440:
        setSize('xl');
        break;
      case sizeBody >= 700 && sizeBody < 1333:
        setSize('md');
        break;
      case sizeBody < 700:
        setSize('xs');
        break;
    }
  }, [])
  return (
    <LayoutHomePage>
      <TitleSectionHomePage sizeBody={size} />
      <SectionDanceStyleCategory />
    </LayoutHomePage>
  )
}

export default Page;

