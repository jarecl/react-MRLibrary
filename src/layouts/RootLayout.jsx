import { Outlet, ScrollRestoration, Form } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx"
// 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import FormBS from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
// 

export default function RootLayout() {
  return (
    <div className="root-layout bg-body-tertiary d-flex flex-column vh-100 " data-bs-theme="dark">

      <ScrollRestoration />

      <header className="z-1000">
        {/* <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink> */}

        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
          <Container fluid>
            <LinkContainer to="/">
              {/* <Navbar.Brand className="w-25" ><Image src="/logov5.webp" width="175px" /></Navbar.Brand> */}
              <Navbar.Brand className="w-25" ><Image src="/library_logo_v1.png" width="175px" /></Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

              <Nav className="me-auto">
                <NavDropdown title="装备" id="collapsible-nav-dropdown">
                  <LinkContainer to="/weapon">
                    <NavDropdown.Item>武器</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/hat">
                    <NavDropdown.Item>帽子</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/top">
                    <NavDropdown.Item>上装</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/bottom">
                    <NavDropdown.Item>下装</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/overall">
                    <NavDropdown.Item>套装</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to="/shoes">
                    <NavDropdown.Item>鞋子</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/gloves">
                    <NavDropdown.Item>手套</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/cape">
                    <NavDropdown.Item>披风</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/shield">
                    <NavDropdown.Item>盾牌</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/faceacc">
                    <NavDropdown.Item>脸部装饰</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to="/eyeacc">
                    <NavDropdown.Item>眼部装饰</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/earring">
                    <NavDropdown.Item>耳环</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/ring">
                    <NavDropdown.Item>戒指</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/pendant">
                    <NavDropdown.Item>吊坠</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/belt">
                    <NavDropdown.Item>腰带</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to="/medal">
                    <NavDropdown.Item>勋章</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/shoulder">
                    <NavDropdown.Item>肩饰</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <LinkContainer to="/monster">
                  <Nav.Link>怪物</Nav.Link>
                </LinkContainer>

                {/* <LinkContainer to="/map">
                  <Nav.Link>Map</Nav.Link>
                </LinkContainer> */}

                {/* Items Tab */}
                <NavDropdown title="物品" id="collapsible-nav-dropdown">
                  <LinkContainer to="/use">
                    <NavDropdown.Item>消耗品</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/setup">
                    <NavDropdown.Item>设置</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/etc">
                    <NavDropdown.Item>其他</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/gacha">
                    <NavDropdown.Item>扭蛋</NavDropdown.Item>
                  </LinkContainer>
                  {/* <LinkContainer to="/cash">
                    <NavDropdown.Item>Cash</NavDropdown.Item>
                  </LinkContainer> */}
                </NavDropdown>

                {/* Tools */}
                <NavDropdown title="工具" id="collapsible-nav-dropdown">
                  <LinkContainer to="/exptable">
                    <NavDropdown.Item>经验表</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/elemental-table">
                    <NavDropdown.Item>属性相克表</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/union-search">
                    <NavDropdown.Item>联合搜索</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/craft-table">
                    <NavDropdown.Item>制作表</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/gpq-solver">
                    <NavDropdown.Item>GPQ解谜</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <LinkContainer to="/opq-solver">
                    <NavDropdown.Item>OPQ解谜</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/accuracy-calc">
                    <NavDropdown.Item>命中率计算</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/worldmap">
                    <NavDropdown.Item>世界地图</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                {/* Links */}
                <NavDropdown title="链接" id="collapsible-nav-dropdown">

                  <LinkContainer to="/api/v1">
                    <NavDropdown.Item>API文档</NavDropdown.Item>
                  </LinkContainer>

                  <Link to='https://royals-droppy.netlify.app/' target="_blank" >
                    <p className="m-0 p-0 mx-3"> 旧版掉落追踪</p>
                  </Link>

                  <Link to='https://royals-droppy-v2-pc.netlify.app/' target="_blank" >
                    <p className="m-0 p-0 mx-3"> 掉落追踪 v2</p>
                  </Link>

                  <Link to='https://royals-droppy-v2-mobile.netlify.app/' target="_blank" >
                    <p className="m-0 p-0 mx-3"> 掉落追踪 v2-手机版</p>
                  </Link>

                  <LinkContainer to="/about-me">
                    <NavDropdown.Item>关于</NavDropdown.Item>
                  </LinkContainer>

                </NavDropdown>
              </Nav>

              <Nav>
                <Form className="d-flex" method="post" action="/all">
                  <FormBS.Control
                    id="globalInput"
                    type="search"
                    placeholder="全局搜索..."
                    className="me-1"
                    aria-label="Search"
                    data-bs-theme="light"
                    name="searchName"
                    defaultValue=""
                  />
                  <Button variant="secondary" type="submit">搜索</Button>
                </Form>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Breadcrumbs />

      </header>
      <main className="text-bg-secondary p-4 flex-fill d-flex justify-content-center">
        <div className="tab-card container-md p-md-4 mx-md-4 py-3 m-0  bg-body-tertiary rounded-5">
          <Outlet />
        </div>
      </main>
    </div >
  )
}

