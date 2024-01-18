import { Box } from '@mui/material';

export const NavButton = ({ menuBtnNames }) => {
  return (
    <Box>
        <ul>
          {menuBtnNames.length > 0 && menuBtnNames.map(nameBtn => {
            return (
              <li key={nameBtn}>
                {nameBtn}
              </li>
            )
          })}
        </ul>
    </Box>
  )
}