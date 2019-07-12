import React from 'react';

class ToggleButton extends React.Component {
    public state = {
        isToggle: false,
    };

    public handleClick = () => {
        this.setState({
            isToggle: !this.state.isToggle,
        });
    }

    public render() {
        return <button onClick={this.handleClick}>{this.state.isToggle ? 'on' : 'off'}</button>;
    }
}

export default () => {
    return <ToggleButton />;
};
