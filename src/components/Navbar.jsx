import React from "react";
import { Header } from "antd/es/layout/layout";
import ButtonGroup from "antd/es/button/button-group";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import Layout from "antd/es/layout/layout";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Layout>
        <Header
      style={{
        backgroundColor: "#36cfc9",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: "25px" }}>Shopping.cart</div>

      <div>
        <ButtonGroup>
          <Button
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </Button>
          <Button
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </Button>
        </ButtonGroup>
      </div>
    </Header>
    </Layout>
  );
};

export default Navbar;
