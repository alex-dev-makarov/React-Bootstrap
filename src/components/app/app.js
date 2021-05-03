import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';

const AppBlocks = styled.div`
    margin: 0 auto;
    max-width: 800px;

`;

const App = () => {

    const data = [
        { label: "I like React", important: true, id: 'wwe' },
        { label: "I like Angular", important: false, id: 'wwweee' },
        { label: "I like JS", important: false, id: 'erwfwef' }
    ];



    return (
        <AppBlocks>
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </AppBlocks>
    )

}









export default App;