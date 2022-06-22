import React from 'react';
import 'antd/dist/antd.css';
import { Button,PageHeader } from 'antd';


const Header =()=>{
    return(
        <div className="site-page-header-ghost-wrapper">
               <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="Title"
                backIcon={false}
                extra={[
                    <Button key="1" type="primary">
                    Primary
                    </Button>,
                ]}
                >


            </PageHeader>
        </div>

    )
}

export default Header;