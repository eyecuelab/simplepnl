import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      textAlign: 'center',
      margin: 'auto',
      height: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));

export default function PinkPagination() {
  const classes = useStyles();
  // const [page, setPage] = React.useState(1);
  // const handleChange = (event, value) => {
  //   setPage(value);
  // };
  return (
    <div className={classes.root}>
      <Pagination
        className={classes.PagStyle}
        count={4}
        variant="outlined"
        size="large"
        // onChange={handleChange}
      />
    </div>
  );
}
