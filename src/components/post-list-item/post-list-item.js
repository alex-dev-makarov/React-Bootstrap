import React, { Component } from 'react';

import './post-list-item.css';



class PostListItem extends Component {
    state = {
        important: false,
        like: false
    };

    onImportant = () => {
        const clickImportant = this.state.important
        this.setState({ important: !clickImportant })
    }

    onLike = () => {
        const clickLike = this.state.like
        this.setState({ like: !clickLike })
    }

    render() {
        const { label } = this.props

        let classNames = 'app-list-item d-flex justify-content-between';

        if (this.state.important) {
            classNames += ' important';
        }

        if (this.state.like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span
                    className="app-list-item-label"
                    onClick={this.onLike}>
                    {label}
                </span>
                <div className='d-flex justify-content center align-items-center'>
                    <button type="submit"
                        className="btn-star btn-sm"
                        onClick={this.onImportant}>

                        <i className="fa fa-star"></i>
                    </button>

                    <button type="submit"
                        className="btn-trash btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}


export default PostListItem;