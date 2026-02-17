import { AuthLayout } from './core/layouts/auth-layout/auth-layout';
import { Routes } from '@angular/router';
import { BlankLayout } from './core/layouts/blank-layout/blank-layout';
import { Login } from './core/auth/login/login';
import { Register } from './core/auth/register/register';
import { Home } from './features/home/home';
import { Products } from './features/products/products';
import { Details } from './features/details/details';
import { Cart } from './features/cart/cart';
import { Categories } from './features/categories/categories';
import { Brands } from './features/brands/brands';
import { Checkout } from './features/checkout/checkout';
import { Wishlist } from './features/wishlist/wishlist';
import { Notfound } from './features/notfound/notfound';

export const routes: Routes = [
    {path: '', component: AuthLayout, children: [
        {path: 'login', component: Login, title: 'Login Page' },
        {path: 'register', component: Register, title: 'Register Page' }
    ]
    },
    {path: '', component: BlankLayout, children: [
        {path: 'home', component: Home, title: 'Home Page' },
        {path: 'products', component: Products, title: 'Products Page' },
        {path: 'details', component: Details, title: 'Details Page' },
        {path: 'categories', component: Categories, title: 'Categories Page' },
        {path: 'brands', component: Brands, title: 'Brands Page' },
        {path: 'cart', component: Cart, title: 'Cart Page' },
        {path: 'checkout' , component: Checkout, title: 'Checkout Page' },
        {path: 'wishlist', component: Wishlist, title: 'Wishlist Page' }
    ]},
    {path: '**', component: Notfound, title: 'Not Found Page' }
];
