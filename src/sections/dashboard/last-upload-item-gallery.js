import {
  Box, Button, Card, CardActions,
  CardHeader,
  Divider, SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from '../../components/scrollbar';
import { format } from 'date-fns';
import { SeverityPill } from '../../components/severity-pill';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import { warning } from '../../theme/colors';


const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error',
}
export const LastUploadItemGallery = (props) => {
  const {orders = [], sx} = props;
  return (
    <Card sx={sx}>
      <CardHeader title="Последние загрузки в галерее" />
      <Scrollbar sx={{maxHeight: 330}}>
        <Box sx={{ minWidth: 800}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Order
                </TableCell>
                <TableCell>`
                  Customer
                </TableCell>
                <TableCell sortDirection="desc">
                  Date
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                const createdAt = format(order.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>
                      {order.ref}
                    </TableCell>
                    <TableCell>
                      {order.customer.name}
                    </TableCell>
                    <TableCell>
                      {createdAt}
                    </TableCell>
                    <TableCell>
                      <SeverityPill color={statusMap[order.status]}>
                        {order.status}
                      </SeverityPill>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          искать по дате
        </Button>
      </CardActions>
    </Card>
  )
}

