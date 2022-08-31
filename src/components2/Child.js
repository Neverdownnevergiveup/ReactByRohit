
import React from 'react';
// import  ReactDOM  from 'react-dom/client';
import * as ReactDOM from 'react-dom';

export default function Child({ setValue }) {
    return (
        <>
            <div>Child</div>
            <button onClick={() => setValue("Parent has been updated!")}>
                Change Parent Value
            </button>
        </>
    );
}

function Parent() {
    const [value, setValue] = React.useState(
        "I need to be updated from my child"
    );

    return (
        <>
            <h3>Update Parent State Challenge (Using Callback)</h3>
            <div className="wrapper">
                <div>Parent</div>
                <div className="box-wrapper">{value}</div>
            </div>

            <div className="wrapper">
                <Child setValue={setValue} />
            </div>
        </>
    );
}

ReactDOM.render(<Parent />, document.getElementById("root"));