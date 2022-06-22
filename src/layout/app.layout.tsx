import Header from "../componment/Header/header"
import Footer from "../componment/Footer/footer";

import { Layout } from 'antd';
import React  from "react";
import {Outlet } from "react-router-dom";
const {Content} = Layout;

const GLayout = ()=>{
    return(
        <Layout className="app-layout">
            <Header/>
                <Content className="layout-content">
                <Outlet/>
                </Content>
            <Footer/>
        </Layout>
    )
}

export default GLayout;