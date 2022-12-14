import React, { useState } from 'react';
import {BurgerMenuButton, Container, Logo, Menu, MenuLink, MenuRegistration, NumberOfProductsInCart} from "./styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";
import SearchBar from "./SearchBar";
import {UserType} from "../../types/user.type";
import AuthModal from "../../containers/modal/auth-modal";
import SideMenuModal from "../../containers/modal/side-menu-modal";
import { ProductT } from '../../types/product.type';
import { cabinetRoutes } from '../../constants/routes';
import { AuthButton } from './AuthButton';


type HeaderProps = {
    user:UserType;
    numberOfProductsInCart:number | undefined,
    products?:ProductT[],
    searchText?:string,
    loading:boolean
    search: (value?: string) => Promise<any> | undefined;
}

const BurgerMenu = <BurgerMenuButton><SvgIcon type={"burger-menu"}/></BurgerMenuButton>

const HeaderComponent:React.FC<HeaderProps> = ({loading,products,numberOfProductsInCart,user, search}) => {
    
    return <Container>
        <SideMenuModal button={BurgerMenu}/>
        <Logo to={"/"}>Shop</Logo>
        <SearchBar loading={loading} products={products} search={search} />
        <Menu>
            {user.id && <>
            <MenuLink to={cabinetRoutes.orders}>
                <SvgIcon type={"orders"} viewBox={"0 0 172 172"} width={"30px"} height={"30px"}/>
            </MenuLink>
            <MenuLink to={cabinetRoutes.wishlist}>
                <SvgIcon type={"favorite"} viewBox={"0 0 172 172"}  width={"30px"} height={"30px"}/>
            </MenuLink>
            <MenuLink to={cabinetRoutes.personalInformation}>
                <SvgIcon type={"user"} viewBox={"0 0 172 172"}  width={"30px"} height={"30px"}/>
            </MenuLink>
            <MenuLink to={cabinetRoutes.cart}>
                <SvgIcon type={"cart"} fill={"white"} viewBox={"0 0 172 172"} width={"30px"} height={"30px"}/>
                <NumberOfProductsInCart>{numberOfProductsInCart}</NumberOfProductsInCart>
            </MenuLink>
            </>}
            {!user.id && <AuthButton/>}
        </Menu>

    </Container>
};

export default HeaderComponent;