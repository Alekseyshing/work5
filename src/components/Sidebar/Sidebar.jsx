import { Link } from "react-router-dom"
import { useState } from 'react'
import logo from '../../assets/logo.png'
import HomeIcon from '../Icons/HomeIcon'
import BasketIcon from '../Icons/BasketIcon'
import MegafonIcon from '../Icons/MegafonIcon'
import StatsIcon from '../Icons/StatsIcon'
import BalanceIcon from '../Icons/BalanceIcon'
import PersonalIcon from '../Icons/PersonalIcon'
import FaqIcon from '../Icons/FaqIcon'
import SupportIcon from '../Icons/SupportIcon'
import LogoutIcon from '../Icons/LogoutIcon'
import './sidebar.css'

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index)
    setSelectedIcon(index);
  };


  const links = [
    {
      url: 'home',
      name: 'Главная',
      img: <HomeIcon color={selectedIcon === 0 ? '#6666CC' : '#7A7B7B'} onClick={() => handleIconClick(0)} />,
    },
    {
      url: 'stores',
      name: 'Мои магазины',
      img: <BasketIcon color={selectedIcon === 1 ? '#6666CC' : '#7A7B7B'} onClick={() => handleIconClick(1)} />
    },
    {
      url: 'promo',
      name: 'Промоматериалы',
      img: <MegafonIcon color={selectedIcon === 2 ? '#6666CC' : '#7A7B7B'} onClick={() => handleIconClick(2)} />
    },
    {
      url: 'stats',
      name: 'Статистика',
      img: <StatsIcon color={selectedIcon === 3 ? '#6666CC' : '#7A7B7B'} onClick={() => handleIconClick(3)} />
    },
    {
      url: 'balance',
      name: 'Баланс',
      img: <BalanceIcon color={selectedIcon === 4 ? '#6666CC' : '#7A7B7B'} onClick={() => handleIconClick(4)} />
    },
    {
      url: 'personal',
      name: 'Персональные данные',
      img: <PersonalIcon color={selectedIcon === 5 ? '#6666CC' : '#7A7B7B'} onClick={() => handleIconClick(5)} />
    },
    {
      url: 'faq',
      name: 'FAQ',
      img: <FaqIcon color={selectedIcon === 6 ? '#6666CC' : '#7A7B7B'} onClick={() => handleIconClick(6)} />
    },
    {
      url: 'support',
      name: 'Поддержка',
      img: <SupportIcon color={selectedIcon === 7 ? '#6666CC' : '#7A7B7B'} onClick={() => handleIconClick(7)} />
    },
    {
      url: 'logout',
      name: 'Выход',
      img: <LogoutIcon color={selectedIcon === 8 ? '#6666CC' : '#7A7B7B'} onClick={() => handleIconClick(8)} />
    },
  ]



  return (
    <nav className="sidebar">
      <div className="sidebar_logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav_list">
        {links.map((link, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            className="nav_list--item"
          >
            {link.img}
            <Link
              className={index === activeIndex ? 'active' : 'inactive'}
              to={link.url}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
