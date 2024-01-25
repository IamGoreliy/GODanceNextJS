import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import {useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import {logout} from '../../lib/Redux/userAuthSlice';

const followingLink = (router, linkBtn, nameBtn, dispatch) => {
  if (nameBtn !== 'logout') {
    router.push(linkBtn);
    return;
  }
  dispatch(logout());
  window.sessionStorage.removeItem('auth');
}

export const RenderingUserSettingsBtn = ({ btnNames }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      {btnNames.map(setting => {
        let url;
        const nameBtn = setting.toLowerCase();
        if (nameBtn === 'login') {
          url = '/auth/login';
        } else {
          url = `/${nameBtn}`;
        }
        return (
          <MenuItem key={setting}
                       onClick={() => followingLink(router, url, nameBtn, dispatch)}
           >
             <Typography textAlign="center">{setting}</Typography>
           </MenuItem>
        )
      })}
    </>
  )

}

//if (setting.toLowerCase() !== 'logout') {
//           return(
//             <MenuItem key={setting}>
//               <Link href={`/${setting.toLowerCase()}`}>
//                 <Typography textAlign="center">{setting}</Typography>
//               </Link>
//             </MenuItem>
//           )
//         }else {
//           return (
//             <MenuItem key={setting}
//                       onClick={}
//             >
//               <Typography textAlign="center">{setting}</Typography>
//             </MenuItem>
//           )
//         }