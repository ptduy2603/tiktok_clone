// Layouts
import { HeaderOnly } from '~/components/Layout/';

// Pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// dùng cho những trang không yêu cầu đăng nhập vẫn truy cập xem được
// nếu layout : null thì chỉ có content tự set, layout === undefined thì lấy DefaultLayout (có header và sidebar)
const publicRouters = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:name', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    { path: '/feedback', component: Search, layout: null },
];

// dùng cho những trang cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRouters, privateRoutes };
