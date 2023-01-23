import { Box, Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Header.css';



export const Header = () => {
    return (
        <Box sx={{ width: 1 }} className='header_wrap'>
            <div className='header_wrap__inner'>
                <a href='/' title='Home'>
                    <img src={'../images/logo_orange_little.png'} alt='Our Wishlist Logo'/>
                </a>
                <nav className='header_wrap-nav'>
                    <NavLink to={'/'} className='header_wrap-main-nav home'>Главная</NavLink>
                    <NavLink to={'/aboutus'} className='header_wrap-main-nav about'>О нас</NavLink>
                    <NavLink to={'/services'} className='header_wrap-main-nav'>Услуги</NavLink>
                    <NavLink to={'/gifts'} className='header_wrap-main-nav'>Подарки</NavLink>
                </nav>
                <Button className='signup' href={'/signup'}>Войти</Button>
            </div>
        </Box>
    )
}