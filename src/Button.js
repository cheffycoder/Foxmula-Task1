import React from "react";
import {Button} from "react-bootstrap";
import { connect } from "react-redux";
import { incrementData } from "./redux/action/increment-action";

const ButtonClick = ({count, incrementCount,incrementData}) => {
    
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height:'100vh'
        }}>
            <Button variant={"primary"} onClick={() => {incrementData()}}>Click Me</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    incrementData : ()=>dispatch(incrementData())
})

export default connect(null,mapDispatchToProps)(ButtonClick);