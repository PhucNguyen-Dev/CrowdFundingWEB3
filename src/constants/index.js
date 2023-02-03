import { createCampaign, dashboard, logout, payment, profile, withdraw,chart } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'payment',
    imgUrl: payment,
    link: '/cryptoindex',
    
  },
  {
    name: 'withdraw',
    imgUrl: withdraw,
    link: '/',
   
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
  
  },
  {
    name: 'chart',
    imgUrl: chart,
    link: '/chart',
  },
];