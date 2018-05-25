import React from 'react';
import FooterElement from './FooterElement/FooterElement';
import { convert } from '/utilities'

import Link from 'next/link'
import { Layout, Menu, Breadcrumb, Col, Row } from "antd";
const { Header, Content, Footer } = Layout;

export default class AppLayout extends React.Component {
    state = {
        current: 'home',
        pages: [
            {page: 'About', subs: ['The Future', 'The Start']},
            {page: 'Labs', subs: ['Ed Labs', 'Dev Labs']},
            {page: 'Projects', subs: ['Purplished']},
            {page: 'Join', subs: ['Come Work With Us']},
            {page: 'Team', subs: ['What We Do', 'Who We Are']},
            {page: 'Contact', subs: ['']},
        ],
    }
    convert = (string) => string.split(" ").join("-").toLowerCase();
    handleClick = (event) => {
        this.setState({
          current: event.key,
        });
      }
    render() {
        let footerLinks = this.state.pages.map((page, i) => {
            return(
                <Col xs={24} sm={8} md={8} lg={4} xl={4} style={{margin: 'auto', padding:'0.8em'}}>
                    <FooterElement key={i} page={page['page']}>
                     {page['subs']}
                    </FooterElement>
                </Col>
                
            )
        });
        let navbarLinks = this.state.pages.map((page, i) => {
            if (i<5) {
                return(
                    <Menu.Item key={i}>
                        <Link href={'/'+convert(page['page'])}>{page['page']}</Link>
                    </Menu.Item>
                )
            }else{
                return null
            }
        });
        return(
            <Layout justify="center">
                    <div className="logo" />
                    <Menu
                    theme="light"
                    onClick={this.handleClick}
                    selectedKeys={this.state.current}
                    mode="horizontal">
                        {navbarLinks}
                    </Menu>
                <Content style={{padding: '4em 2em 4em', backgroundColor: 'white'}}>
                        {this.props.children}
                </Content>
                <Footer style={{backgroundColor:' #b2bec3', margin:'auto', width:'100%'}}>
                    <Row align="top" justify="center">
                        {footerLinks}
                    </Row>
                </Footer>
            </Layout>
        )
       
    }
}