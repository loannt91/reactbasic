import React from "react";

class Mycomponent extends React.Component {

    /*
    jsx ==>return block
    */

    state = {
        firstname: '',
        lastname: ''
    }

    handleChangeFirstName = (event) => {
        this.setState({ firstname: event.target.value })
    }

    handleChangeLastName = (event) => {
        this.setState({ lastname: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> check data input: ', this.state)
    }

    render() {

        // let name = 'Eric';
        console.log('>>> call render:', this.state)
        return (
            // <React.Fragment>
            //     <div className="first">
            //         {/* {console.log('My name is', name)} */}
            //         <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />

            //         hello my component, my name is {this.state['name']}
            //     </div>
            //     <div className="second">
            //         Đây là buổi học react đầu tiên của tôi được dạy bởi {this.state.channel}
            //     </div>
            //     <div className="third">
            //         <button onClick={() => this.handeClickButton()}>CLick Me</button>
            //     </div>
            // </React.Fragment>
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstname} onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastname} onChange={(event) => this.handleChangeLastName(event)} /><br /><br />
                    <input type="button" value="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>

        )
    }
}

export default Mycomponent;