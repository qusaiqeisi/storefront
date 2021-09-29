import React from 'react' 
import {connect} from 'react-redux'
import {active} from '../store/action'
import {Grid, Button ,Typography} from '@material-ui/core'



function Category(props){
    
    console.log(props,'()()())');
// return(
        //     <>
        //     <h1>hhhg</h1>
        //     </>
        // )
    // if (props.Category) {
    return(
        <>
       { props.Category.map((e,idx)=>{
           return(
            <Button key={idx}  
            variant="outlined"
            color="primary" 
            onClick={()=>props.active(e.name)} >
                {e.display_name}                  
            </Button>
           )
        })}
       </>
        )
    // }else{
    //     console.log(props.x.payload,"2222222222222222");
    //     return(
    //         <>
    //         <Button   
    //         // variant="outlined"
    //         color="primary" 
    //         // onClick={()=>props.active(props.x.payload)}
    //          >
    //             {props.x.payload}                  
    //         </Button>
    //         </>
    //     )
    // }
}


// 1- add the state to this component props
const mapStateToProps = state => ({
    Category:state.categories.categories,
    // x: state.categories.categories
});
// 2- since I have some actions to use: 
// add the actions to the component props
const mapDispatch = {active}
//3. connect your component and export it after its connected to redux store
export default connect(mapStateToProps,mapDispatch)(Category)// export default Category;