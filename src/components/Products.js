import {active , increment, getRemotData ,updateRemotData } from '../store/action'
import { connect } from 'react-redux'
import React ,{useEffect}from 'react'
import {AppBar,Card,Container ,Link,makeStyles,Grid,Box,Button} from '@material-ui/core/';
const api='https://api-server-0.herokuapp.com/products';


function Product (props){

    useEffect(()=>{
        props.getRemotData(api)
    } , [])
    
    // return(
        //     <>
        //     <h1>hhhg</h1>
        //     </>
        // )
        console.log(props.productProps.initialState,'+++++++++++++++');
        if(props.productProps.initialState){
            return(
                <> 

        <Container style={{ background: 'whitesmoke' }} >
            <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {props.productProps.initialState.map((e,idx)=>{
            // console.log(props,'from product');
                return(
                <>

                <Card key={idx} style={{ margin: '3%' }}>

                <Grid  spacing={4}  item xs={6} >
                    <img src={e.image} alt={e.name} width='300px'></img>
                    <h1>{e.name}</h1>
                                <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                Spacing={12}
                                >
                                <Button 
                                onClick={()=>{props.updateRemotData(api,e)
                                    // console.log(props.increment(),e.inStock,'after product')
                                }}
                                    >
                                ADD TO CARD
                                </Button>
                                <p variant="h6">
                                DETAILS</p>
                                </Grid>
                                <p>In Stock {e.inventory}</p>
                </Grid>
                </Card> 
            </>
            )
            })}
            </Grid>
            </Container >            
         </>
    )}else{
        return(
            <>
        <h1>Choose Category</h1>
        </>
        )
    }
}
// 1- add the state to this component props
const mapStateToProps=state=>({
    // product:state.products, /// state.reducer name in combineReducer

    productProps:state.products
})
// 2- since I have some actions to use: 
// add the actions to the component props
const mapDispatch={active , increment ,getRemotData ,updateRemotData}
//3. connect your component and export it after its connected to redux store
export default connect(mapStateToProps , mapDispatch)(Product)// export default Product;