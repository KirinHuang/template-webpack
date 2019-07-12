/*-----------------context-----------------*/
const ThemeContext = React.createContext('light');

const App = (props: any) => {
    return (
        <ThemeContext.Provider value="dark">
            <div className={props.theme}>
                <Greeting isLogin></Greeting>
            </div>
        </ThemeContext.Provider>
    );
};

const Greeting = (props: any) => {
    const isLogin = props.isLogin;

    if (isLogin) {
        return <UserGreeting></UserGreeting>;
    }

    return <GuestGreeting></GuestGreeting>;
};

const UserGreeting = () => {
    const contextType = ThemeContext;
    return (
        <h1>welcom xxxx!</h1>
    );
};

// class UserGreeting extends React.Component {
//     static contextType = ThemeContext

//     render () {
//         return <h1 className={this.context}>welcom xxxx!</h1>
//     }
// }

const GuestGreeting = () => {
    return (
        <h1>please sign up!</h1>
    );
};
