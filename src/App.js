import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters, privateRoutes } from '~/routes/index.js';
import { DefaultLayout } from '~/components/Layout';
import React from 'react';

function App() {
    // states về theme và language
    const [currentLanguage, setCurrentLanguage] = useState('vi')

    return (
        <Router>
            <div className="app">
                {/* chuyển tiếp trang với router V6  */}
                <Routes>
                    {publicRouters.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;
                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <route.component />
                                    </Layout>
                                }
                                key={index}
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
