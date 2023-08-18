// Layouts
import { HeaderOnly } from '~/components/Layout/';

// Pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import routesConfig from '~/config/routes.js';

// dùng cho những trang không yêu cầu đăng nhập vẫn truy cập xem được
// nếu layout : null thì chỉ có content tự set, layout === undefined thì lấy DefaultLayout (có header và sidebar)
const publicRouters = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.feedback, component: Search, layout: null },
];

// dùng cho những trang cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRouters, privateRoutes };
