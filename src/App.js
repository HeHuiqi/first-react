import React, {Component} from 'react';


//这种会在将会在<head>标签中插入<type="text/css"></type>标签
// 如：
/*
<style type="text/css">
    .Header {
         background-color: #86ff35;
    }
</style>
*/
// require("./App.css")
import "./App.css"

//这种样式会应用与某个标签的style属性
//如：
// <h1 style="background-color: red;">Hello React!</h1>
const styles = {
    hqBg: {
        backgroundColor: 'red',
    },
    hello:{
        backgroundColor:'blue',
        color:'white',
    },
};

class Hello extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
        }
    }

    render(){
        return (
            <div style={styles.hello}>
                <h1>你好{this.props.name}</h1>
                <h2>今天是：{this.state.date.toLocaleDateString()}</h2>
            </div>
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <div className="Header" >
                <h1 style={styles.hqBg}>Hello React!</h1>
                <h1>Hello Webpack</h1>
                <Hello name={"HHQ1"}/>
            </div>

        );
    }
}