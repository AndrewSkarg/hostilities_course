import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Публікації',
    path: '#',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M5 9.54883L0.669873 0.887173L9.33013 0.887175L5 9.54883Z" fill="black" />
    </svg>,
    iconOpened: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M5 0.45117L9.33013 9.11283L0.669873 9.11283L5 0.45117Z" fill="black" />
</svg>
,

    subNav: [
      {
        title: 'Новини',
        path: '#',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Цікаве',
        path: '#',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reports',
    path: '#',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 9.54883L0.669873 0.887173L9.33013 0.887175L5 9.54883Z" fill="black" />
                    </svg>,
    iconOpened: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M5 0.45117L9.33013 9.11283L0.669873 9.11283L5 0.45117Z" fill="black" />
</svg>
,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Products',
    path: '#',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Team',
    path: '#',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Messages',
    path: '#',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed:  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 9.54883L0.669873 0.887173L9.33013 0.887175L5 9.54883Z" fill="black" />
                    </svg>,
    iconOpened: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M5 0.45117L9.33013 9.11283L0.669873 9.11283L5 0.45117Z" fill="black" />
</svg>
,

    subNav: [
      {
        title: 'Message 1',
        path: '#',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '#',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '#',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
