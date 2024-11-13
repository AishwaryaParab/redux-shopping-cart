import { Button, Image, Menu, Typography } from 'antd'
import Layout, { Content, Header } from 'antd/es/layout/layout'
import React, { useEffect } from 'react'
import home from "../images/home.jpg";
import ButtonGroup from 'antd/es/button/button-group';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  const navigate = useNavigate();


  useEffect(() => {
    {isLoggedIn ? navigate("/") : navigate("/login")}
  }, [isLoggedIn])

  return (
    <div>
        <Layout>
            <Navbar />

            <Content style={{backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Image preview={false} src={home} style={{height: "90vh"}} />
            </Content>
        </Layout>
    </div>
  )
}

export default Home