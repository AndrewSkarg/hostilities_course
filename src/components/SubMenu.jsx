import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  list-style: none;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #E7EEF3;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;



const DropdownLink = styled(Link)`
  background: #fff;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  
  &:hover {
    background: #E7EEF3;
    cursor: pointer;
  }
`;






const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => { console.log('gdgdg'); setSubnav(!subnav); };

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div style={{ width: 100 + '%' }}>
          <div className='sidebar-label-container'>
            <SidebarLabel>
              {item.icon}
              {item.title}
            </SidebarLabel>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
                ? item.iconClosed
                : 'null'}</div>
          <hr className='h-line' />
        </div>

      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          console.log('submenu')
          console.log(item.title);

          return (<>
            <DropdownLink to={item.path} key={index}>

              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
            <hr className='sub-line' />
          </>
          );
        })}
    </>
  );
};

export default SubMenu;
