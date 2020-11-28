import LoginPage from "./modules/loginPage/LoginPage";
import TablePage from "./modules/TablePage/TablePage";
import PersonalAccount from "./modules/PersonalAccount/PersonalAccount";
import AdminPage from "./modules/AdminPage/AdminPage";
import UserEditPage from "./modules/UserEditModal/UserEditModal";

export const LOGIN_PAGE_PATH = '/login';
export const TABLE_PAGE_PATH = '/table';
export const PERSONAL_ACCOUNT_PAGE_PATH = '/personalAccount';
export const ADMIN_PANEL_PAGE_PATH = '/admin_panel';
export const USER_EDIT_PAGE_PATH = '/user/:userId';

export const ROUTERS = [
    { path: LOGIN_PAGE_PATH, component: LoginPage},
    { path: TABLE_PAGE_PATH, component: TablePage},
    { path: PERSONAL_ACCOUNT_PAGE_PATH, component: PersonalAccount},
    { path: ADMIN_PANEL_PAGE_PATH, component: AdminPage},
    { path: USER_EDIT_PAGE_PATH, component: UserEditPage},
];