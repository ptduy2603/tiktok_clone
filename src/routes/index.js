// Layouts
import { HeaderOnly } from '~/components/Layout/';

// Pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import config from '~/config';

// dùng cho những trang không yêu cầu đăng nhập vẫn truy cập xem được
// nếu layout : null thì chỉ có content tự set, layout === undefined thì lấy DefaultLayout (có header và sidebar)
const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.feedback, component: Search, layout: null },
];

// dùng cho những trang cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRouters, privateRoutes };
