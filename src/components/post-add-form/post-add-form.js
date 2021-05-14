import React, { Component } from 'react';

import './post-add-form.css'

class PostAddForm extends Component {

    state = {
        text: ''
    }


    valueChangeHandler = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    };

    render() {
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.submitHandler}>
                <input
                    type="text"
                    placeholder="О чём вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.valueChangeHandler}
                    value={this.state.text}
                    required />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Добавить</button>
            </form>
        );
    }

}


export default PostAddForm;