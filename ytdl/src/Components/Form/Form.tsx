import React, { Component } from 'react';

interface PropInterface {
    handleSubmit: (urlPassed: string) => void;
    buttonText: string;
}

class Form extends Component<PropInterface, any> {

    initialState = {
        url: "",
        buttonText: this.props.buttonText,
    }

    state = this.initialState;

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    submitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.url);
    }

    render() {

        return (
            <div className="container w-50">
                <form>
                    <div className="form-group justify-content-center align-items-center">
                        <label htmlFor="url">URL</label>
                        <input type="text" className="form-control" name="url" aria-describedby="urlHelp" placeholder="Enter URL" value={this.state.url} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="mt-2 btn btn-primary" onClick={this.submitForm}>{this.state.buttonText}</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;