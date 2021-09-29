// import {AppBar , Toolbar , Button, IconButton ,MenuIcon ,Typography,classes} from '@material-ui/icons/@material-ui/icons/ShoppingCartOutlined'

import {Button }from  '@material-ui/core/'
import {active} from '../store/action'
import { connect } from 'react-redux'
import Categories from './Categories'


import {
    AppBar,
    Typography,
    Toolbar,
    Link,
    IconButton,
    Grid,
    Box,
  } from '@material-ui/core/';
//   import {IconButton } from '@material-ui/icons'
//   import { connect } from 'react-redux';
  import { increment } from '../store/action';
  import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
  import Menu from '@material-ui/core/Menu';
  import { CardHeader } from '@material-ui/core';


  function Header(props) {
  //   const test =()=>{
  // console.log(props,'^^^^^^^66');
  //   }
    console.log(props,'////////////');
    return (
        <AppBar style={{ background: 'whitesmoke' }} position="static"  color="inherit">
        <Toolbar >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <IconButton edge="false" className={Menu.menuButton}  aria-label="menu">
            <Link
            href="#" onClick={()=>{
              props.test.show=false
            // console.log(props.test.show);
            }}
            > 
            OUR STORE
            </Link>

          </IconButton>
          <Typography variant="h6" className={Menu.title}>
              {`CART (${props.totalCart})`}
          </Typography>
          </Grid>
        </Toolbar>
        </AppBar>
    );
  }

  const mapStateToProps = (state) => ({
     totalCart: state.cart.count ,
      // test: state.products
    });
  const mapDispatchToProps = { active };
  export default connect(mapStateToProps, mapDispatchToProps)(Header);