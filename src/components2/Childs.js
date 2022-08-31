import React from 'react';
// import  ReactDOM  from 'react-dom/client';
import * as ReactDOM from 'react-dom';
export default function Childs() {
    return <div>This is children content</div>;
}

function Parent({ children }) {
    return (
        <div>
            <h3>Parent Component</h3>
            {children}
        </div>
    );
}

function App() {
    return (
        <Parent>
            <Childs />
        </Parent>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

