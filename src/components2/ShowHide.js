
import React from 'react'

export default function ShowHide() {
    const [show, setShow] = React.useState(true);
    return (
        <>
            <div className="SHide">
                <button onClick={() => setShow(!show)}>
                    {show ? "hide element below" : "show element below"}

                </button>
                {show && <div>Hii you are searching me ,now i am</div>}
            </div>

        </>
    )
}
