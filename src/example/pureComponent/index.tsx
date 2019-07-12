import React, { MouseEvent } from 'react';

const LinkAction = () => {
    function handleClick(event: MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        console.log('LinkAction clicked!');
    }

    return (
        <a href="#" onClick={handleClick}>
            click me
        </a>
    );
};

export default () => {
    return <LinkAction />;
};
