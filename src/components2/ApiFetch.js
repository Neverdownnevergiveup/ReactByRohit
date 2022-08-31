import React from 'react';
// import  ReactDOM  from 'react-dom/client';
import * as ReactDOM from 'react-dom';
const url = "https://api.publicapis.org/entries";
/** 
  // Sample Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/
export default function ApiFetch() {
    const [userData, setUserData] = React.useState({});

    const getUserData = async () => {
        const response = await fetch(url);
        const apiData = await response.api();
        setUserData(apiData);
    };

    React.useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className="App">
            <h2>User Data1</h2>

            <p>
                <strong>API:</strong> {userData.API}
            </p>
            <p>
                <strong>Description:</strong> {userData.Description}
            </p>
            <p>
                <strong>Auth:</strong> {userData.Auth}
            </p>
            <p>
                <strong>Link:</strong> {userData.Link}
            </p>
            <h2>User Data2</h2>

            <p>
                <strong>Name:</strong> {userData.name}
            </p>
            <p>
                <strong>Website:</strong> {userData.website}
            </p>
            <p>
                <strong>Email:</strong> {userData.email}
            </p>
            <p>
                <strong>Phone:</strong> {userData.phone}
            </p>
        </div>
    );
}

ReactDOM.render(<ApiFetch />, document.getElementById("root"));

