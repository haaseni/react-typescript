import React, { Component } from 'react'
import MyClass from './components/MyClass'
import MyComp from './components/MyComp'

class App extends Component {
    render() {
        return (
            <div className="App">
                <MyClass name={'Nick'} isMarried={true} />
                <MyComp name={'Nick'} isMarried={false} kids={2} livedIn={"Florida"} />
            </div>
        )
    }
}

export default App