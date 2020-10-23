import Home from '../views/home/index'
import Detail from '../views/detail/index'
import Cart from '../views/cart/index'
import Admin from '../views/admin/index'

export default [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/detail',
        component: Detail,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/admin',
        component: Admin,
    },
]
