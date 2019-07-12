import * as React from 'react';

class Clock extends React.Component {
    public timer: number = null;

    public state = {
        date: new Date(),
    };

    public tick() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date(),
            });
        });
    }

    public componentDidMount() {
        this.tick();
    }

    public componentWillUnmount() {
        clearInterval(this.timer);
    }

    public render() {
        return <div>{this.state.date.toString()}</div>;
    }
}

export default () => {
    return <Clock />;
};
