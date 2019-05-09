import * as React from 'react'
import * as ReactDom from 'react-dom'

import * as config from './config'

/*-----------------context-----------------*/
const ThemeContext = React.createContext('light')

const App = (props:any) => {
    return (
        <ThemeContext.Provider value="dark">
            <div className={ props.theme }>
                <Greeting isLogin></Greeting>
            </div>
        </ThemeContext.Provider>
    )
}

const Greeting  = (props: any) => {
    const isLogin = props.isLogin

    if (isLogin) {
        return <UserGreeting></UserGreeting>
    }

    return <GuestGreeting></GuestGreeting>
}

const UserGreeting = () => {
    const contextType = ThemeContext
    return (
        <h1>welcom xxxx!</h1>
    )
}

// class UserGreeting extends React.Component {
//     static contextType = ThemeContext

//     render () {
//         return <h1 className={this.context}>welcom xxxx!</h1>
//     }
// }

const GuestGreeting = () => {
    return (
        <h1>please sign up!</h1>
    )
}

const LinkAction = () => {
    function handleClick(event:any) {
        event.preventDefault()
        console.log('LinkAction clicked!')
    }

    return (
        <a href="#" onClick={handleClick}>click me</a>
    )
}

class ToggleButton extends React.Component {
    state = {
        isToggle: false
    }

    constructor(props:any) {
        super(props)
    }

    handleClick = () => {
        this.setState({
            isToggle: !this.state.isToggle
        })
    }

    render() {
        return (
            <button onClick={this.handleClick }>{ this.state.isToggle ? 'on' : 'off' }</button>
        )
    }
}

class Clock extends React.Component {
    timer:number = null

    state = {
        date: new Date()
    }

    tick() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        })
    }

    componentDidMount() {
        this.tick()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>{ this.state.date.toString() }</div>
        )
    }
}

ReactDom.render(
    <App theme={config.DEFAULT_THEME} />,
    document.getElementById('app')
)

if (module.hot) {
    module.hot.accept('./module.a', function () {
        console.log('main.js is updated')
    })
}