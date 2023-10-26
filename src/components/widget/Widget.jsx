import React from 'react';
import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({ type }) => {
    let data;

    const amount = '100';
    const diff = '20%';

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See All Users',
                icon: <PersonIcon className='icon' style={{ color: 'crimson', backgroundColor: "rgba(255, 0, 0, 0.2)", }} />
            }
            break;
        case 'order':
            data = {
                title: 'ORDER',
                isMoney: false,
                link: 'See All Orders',
                icon: <ShoppingCartIcon className='icon' style={{ backgroundColor: "rgba(218, 165, 32, 0.2)", color: "goldenrod", }} />
            }
            break;

        case 'earning':
            data = {
                title: 'EARNINGS',
                isMoney: false,
                link: 'View net earnings',
                icon: <AttachMoneyIcon className='icon' style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />
            }
            break;

        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: false,
                link: 'View all balance',
                icon: <AccountBalanceWalletIcon className='icon' style={{ backgroundColor: "rgba(128, 0, 128, 0.2)", color: "purple" }} />
            }
            break;

        default:
            break;
    }
    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data?.title}</span>
                <span className='counter'>{data?.isMoney && '$'} {amount}</span>
                <span className='link'>{data?.link}</span>
            </div>

            <div className='right'>
                <div className='percentage positive'>
                    <KeyboardArrowUpIcon />
                    {diff}
                </div>
                {data?.icon}
            </div>
        </div>
    )
}

export default Widget