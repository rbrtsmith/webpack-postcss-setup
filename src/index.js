import css from './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const Title = ({text1, text2} = props) => <h1>{text1}-{text2}</h1>;

const App = React.createClass({
    render() {
        return (
            <div>
                <Title text1="Hello" text2="World!!"/>
                <p>Welcome to our planet</p>
            </div>
        );
    }
});

ReactDOM.render(<App />, document.querySelector('#app'));