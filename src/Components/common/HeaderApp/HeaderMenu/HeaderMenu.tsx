
import { useState } from 'react';
import {  Button, Drawer } from 'antd';
import { MdMenu } from 'react-icons/md';

import { IoCloseSharp } from 'react-icons/io5';
import {  NavLinksCart, NavLinksItems } from '../../../../hooks/NavLinks';
const HeaderMenu = () => {
      const [open, setOpen] = useState(false);
      const showDrawer = () => {
        setOpen(true);
      };

      const onClose = () => {
        setOpen(false);
      };
  return (
    <>
      <MdMenu className="menu-icon" onClick={showDrawer} />
      <Drawer
        // title="Drawer with extra actions"
        placement="top"
        width={500}
        onClose={onClose}
        closeIcon={false}
        closable={false}
        maskClosable
        open={open}
        getContainer={false}
        style={{
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
          zIndex: 999,
          height: '100vh',
          overflow: 'auto',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        <Button type="text" onClick={onClose} className="close-drawer">
          <IoCloseSharp />
        </Button>
        <div className="nav-drawer">
          <NavLinksItems onClose={onClose} />
        </div>
        <div className="cart-drawer">
          <NavLinksCart onClose={onClose} />
        </div>
      </Drawer>
    </>
  );
}

export default HeaderMenu