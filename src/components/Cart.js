import React from 'react' 
import {connect} from 'react-redux'
import {increment ,decrement} from '../store/action'
import {Grid, Typography,Button,List ,ListItem ,Card} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
function Category(props){
    console.log(props.cartProd,'===========',props.test);
    // return(<h1>ggg</h1>)
    // console.log(props);
if (props.show) {
    return(
        <>
        <List >
            <Card style={{background:'whitesmoke', width:'300px', right: '50%'}}>
        { props.cartProd.map((e,idx)=>{
           return(
            <ListItem  key={idx} >
                    <Typography >
                        {e} <Button onClick={()=>props.decrement(e)}>
                                <DeleteIcon
                                color="secondary"
                                style={{
                                    cursor: 'pointer',
                                    paddingTop: '5px',
                                }}></DeleteIcon>
                            </Button>  
                    </Typography>
            </ListItem >
           )
        })}
            </Card>  
        </List >
       </>
        )
}else{
    return(<>{null}</>)
}
}


// 1- add the state to this component props
const mapStateToProps = state => ({
    cartProd: state.cart.display,
    count:state.cart.count,
    show: state.cart.show,
    test:state
});


// 2- since I have some actions to use: 
// add the actions to the component props
const mapDispatch = {increment ,decrement}
//3. connect your component and export it after its connected to redux store
export default connect(mapStateToProps,mapDispatch)(Category)// export default Category;