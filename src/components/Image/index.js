import React,{Fragment, useState} from 'react'

// export default (props) => {
//     return (
//         <img src={props.src} />
//     )
// }


// export default class Image extends React.Component{

//     constructor(props){
//         super(props)
//         this.state = {
//             name: 'Martyn',
//             grow: false
//         }
//     }

//     handleClick = () => {
//         let {grow} = this.state
//         console.log("Hello!")
//         this.setState({
//             grow: !grow
//         })
//         console.log(this.state.grow)

//     }

//     render(){
//         return(
//             <Fragment>
//                 <img styles={{transform: this.state.grow ? 'rotate(90deg)' : 'rotate(0deg)'}} height={this.state.grow ? '500': '300'} onClick={this.handleClick} src={this.props.src} alt="theThing"></img>
//                 {/* <p>{this.state.name}</p> */}
//                 {/* asynchronous on grow statys */}
//             </Fragment>

//         )
//     }
// }

export default function Image(props){
    const [grow,setGrow] = useState(false)

    return(
        <img onClick={()=> {setGrow(!grow) }} height={grow ? '500': '300'} src={props.src} />
    )
}