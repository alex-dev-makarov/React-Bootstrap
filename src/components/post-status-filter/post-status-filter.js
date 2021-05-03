import React from 'react';

import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            
            <button type="submit" className="btn btn-info">All</button>
            <button type="submit" className="btn btn-outline-secondary">liked</button>
        </div>
    )
}



export default PostStatusFilter;