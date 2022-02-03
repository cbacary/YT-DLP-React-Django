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
            <div className="container">
                <form>
                    <div className="form-group justify-content-center align-items-center">
                        <label htmlFor="url">URL</label>
                        <input type="text" className="form-control" name="url" aria-describedby="urlHelp" placeholder="Enter URL" value={url} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="mt-2 btn btn-primary" onClick={this.submitForm}>Submit</button>
                    </div>
                    <small id="urlHelp" className="form-text text-muted">We're open source! Check out our <a href="#">Github</a>!</small>
                </form>
            </div>
        );
    }
}

export default Form;