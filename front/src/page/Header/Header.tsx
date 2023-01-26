import { Box, Button, Container, Icon } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';





export const Header = () => {

    const [burger, setBurger] = useState('active')


    return (
        <Box sx={{ width: 1 }} className={`header_wrap ${burger}`}>
            <Box className={`header_wrap__inner ${burger}`}>
                <Button className='header_wrap__link-home' href='/' title='Home'>
                    <img src={'../images/logo_orange_little.png'} alt='Our Wishlist Logo'/>
                </Button>
                <Box className='mobile_nav_buttons'>
                    <img className={`nav_images ${burger}`} src={'../images/burger.svg'} alt='Menu' height='60' onClick={() => setBurger('noactive')} />
                    <img className='nav_images' src={'../images/close.svg'} height='60' alt='Close' onClick={() => setBurger('active')} />
                </Box>
                <Box className={`header_wrap-nav ${burger}`}>
                    <NavLink to={'/'} className='header_wrap-main-nav home'>Главная</NavLink>
                    <NavLink to={'/aboutus'} className='header_wrap-main-nav about'>О нас</NavLink>
                    <NavLink to={'/services'} className='header_wrap-main-nav'>Услуги</NavLink>
                    <NavLink to={'/gifts'} className='header_wrap-main-nav'>Подарки</NavLink>
                </Box>
                <Button className={`signup ${burger}`} href={'/signup'}>Войти</Button>
            </Box>
        </Box>
    )
}