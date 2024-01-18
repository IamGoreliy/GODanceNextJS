import {NavButton} from '../../sections/navButton/navButton';
import ResponsiveAppBar from '../../sections/navButton/navButtonMUI';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const testFetch = async () => {
  const testUrl = '/api/data';
  const testDataRes = await fetch(testUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  console.log(testDataRes)
  return testDataRes.json();
}

const LayoutHomePage = ({children}) => {
  const [testReq, setTestReq] = useState();
  return (
    <>
      {/*<NavButton menuBtnNames={['Галлерея', 'Календарь', 'Контакты', 'Чат Телеграм']}/>*/}

      <ResponsiveAppBar menuBtnNames={['Галлерея', 'Календарь', 'Контакты', 'Чат Телеграм']}/>
      <ToastContainer/>
      {children}
      <button
        style={{height: '100px', marginTop: '40px'}}
        onClick={async () => {
          const test = await testFetch();
          setTestReq(test);
        }}
      >
        test
      </button>
      <button
        onClick={() => console.log(testReq)}
      >
        seeResult
      </button>
    </>
  )
}

export default LayoutHomePage;