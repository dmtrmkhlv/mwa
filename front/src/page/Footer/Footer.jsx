import { Box, Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Footer.css';



export const Footer = () => {
    return (
        <Box sx={{ width: 1 }} className='footer__outer'>
            <Box className='footer__top'>
                <nav className='footer__nav'>
                    <Box>
                    <NavLink to={'/'} className='header_wrap-main-nav home'>Главная</NavLink>
                    <NavLink to={'/aboutus'} className='header_wrap-main-nav about'>О нас</NavLink>
                    </Box>
                    <a href='/' title='Home'>
                        <img src={'../images/logo_orange_little.png'} alt='Our Wishlist Logo'/>
                    </a>
                    <Box>
                    <NavLink to={'/services'} className='header_wrap-main-nav'>Услуги</NavLink>
                    <NavLink to={'/gifts'} className='header_wrap-main-nav'>Подарки</NavLink>
                    </Box>
                </nav>
            </Box>
            <Box className='footer__bottom'>
                <nav className='footer_nav_soc'>
                    <Box>
                    <NavLink to={'https://vk.com'} className='header_wrap-main-nav home'>
                        <img src={'../images/vk.png'} alt='Soc link'/>
                    </NavLink>
                    <NavLink to={'https://pinterest.com'} className='header_wrap-main-nav about'>
                        <img src={'../images/pinterest.png'} alt='Soc link'/>
                    </NavLink>
                    <NavLink to={'https://twitter.com'} className='header_wrap-main-nav'>
                        <img src={'../images/twitter.png'} alt='Soc link'/>
                    </NavLink>
                    <NavLink to={'https://youtube.com'} className='header_wrap-main-nav'>
                        <img src={'../images/youtube.png'} alt='Soc link'/>
                    </NavLink>
                    </Box>
                </nav>
            </Box>
            <Box className='footer__copy'>
                <span>&copy; 2023</span><Button className='privacy' href={'./privacy'}>Политики</Button>
            </Box>
        </Box>
    )
}