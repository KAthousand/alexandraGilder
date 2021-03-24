import React from 'react';
import Header from '../Header/Header';
import "./Layout.css"

function Layout(props) {
  const { visibleAbout } = props
  return (
    <div className="layout">
      <Header visibleAbout={visibleAbout} />
      <div className="layout-children">
        {props.children}
      </div>
    </div>
  );
}

export default Layout;