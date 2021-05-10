import { MenuEntry } from '@paniniswap/paniniswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.paniniswap.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.paniniswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Task Center',
        href: '/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://paniniswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://paniniswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://paniniswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://paniniswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.paniniswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/paniniswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.paniniswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://paniniswap.medium.com',
      },
    ],
  },
]

export default config
