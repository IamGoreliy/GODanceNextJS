import LayoutHomePage from '../layouts/navigation/homePagelayout';
import TitleSectionHomePage from '../sections/homePage/titleSectionHomePage';
import SectionDanceStyleCategory from '../sections/homePage/sectionDanceStyleCategory';
import { useLayoutEffect, useState } from 'react';
import {Provider} from 'react-redux';
import {store} from '../lib/Redux/store';

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
      <Provider store={store}>
        <TitleSectionHomePage sizeBody={size} />
        <SectionDanceStyleCategory />
      </Provider>
    </LayoutHomePage>
  )
}

export default Page;

