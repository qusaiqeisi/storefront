import { Typography, makeStyles  } from '@material-ui/core/';

const ss= {
      color: 'black',
      backgroundColor: 'whitesmoke',
    //   padding: theme.spacing(5),
    padding:'5%'
    };

function Footer(){

return (

    <>



      <footer style={ss}>

      <Typography variant="h6" color="inherit" align="center" gutterBottom>
      &copy; 2021 Javascript 401
        </Typography>

      </footer>

    </>
)


}

export default Footer