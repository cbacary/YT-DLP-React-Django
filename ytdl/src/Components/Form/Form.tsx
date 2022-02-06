import React, { Component } from 'react';

interface PropInterface {
    handleSubmit: (urlPassed: string) => void;
}

class Form extends Component<PropInterface, any> {

    initialState = {
        url: "",
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
        const { url } = this.state;

        return (
            <div className="container w-50">
                <form>
                    <div className="form-group justify-content-center align-items-center">
                        <label htmlFor="url">URL</label>
                        <input type="text" className="form-control" name="url" aria-describedby="urlHelp" placeholder="Enter URL" value={url} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="mt-2 btn btn-primary" onClick={this.submitForm}>Convert</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;