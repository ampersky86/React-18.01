import React, {useState} from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItems';


const Layout = props => {

    const brand = 'React blog!';
    //const [brandName, setbrandName] = useState(brand);

    const isActive = href => (
        window.location.pathname === href
    );


    return (
        <div>
            <Menu brand={brand}>
                <MenuItem href="/" active={isActive.bind(this, '/')}>
                    Главная
                </MenuItem>
                <MenuItem href="/users" active={isActive.bind(this, '/users')}>
                    Пользователи
                </MenuItem>
            </Menu>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {props.children}
                    </div>
                </div>
            </div>
            <footer className="card-footer">
                &copy; 2019
            </footer>
        </div>
    );
};

export default Layout;