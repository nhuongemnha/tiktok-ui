import React from 'react';
import Header from '~/components/Layout/components/Header';
import SideBar from './SideBar';

const DefaultLayout = (props) => {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{props.children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
