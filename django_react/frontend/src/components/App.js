import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount() {
        fetch("api/lead")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "Something went wrong!" };
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render() {
        const details = this.state.data
        return (

            <div className="">
                <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
                    <div className="mb-2 sm:mb-0">
                        <a href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a>
                    </div>
                    <div>
                        <a href="/" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 px-8">Subscribers List </a>
                        <a href="/subscribe" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"><b>Subscribe Us</b></a>

                    </div>
                </nav>
                <h1 className="mb-8 text-center px-8 py-4">
                    <b>List of all Subcribers</b>
                </h1>


                <div className="w-1/6  mx-auto flex p-6 bg-white rounded-lg ">
                    <table className="shadow-lg bg-white">
                        <tr>
                            <th className="bg-blue-100 border px-8 py-4">Email</th>
                        </tr>
                        {!details || details.length <= 0 ? (
                            <tr>
                                <td className="border text-left px-8 py-4">Ops, no one here yet</td>
                            </tr>
                        ) : (
                            details.map(detail => (

                                <tr key={detail.pk}>
                                    <td className="border text-left px-8 py-4">{detail.email}</td>
                                </tr>
                            )
                            )
                        )}
                    </table>
                </div>
            </div>
        );
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);