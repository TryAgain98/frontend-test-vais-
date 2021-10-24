import React from "react"
import { Container } from 'reactstrap';

import Header from "../header/index"
import Content from "../content/index"

const Home = () => {
    return (
        <Container>
            <Header />
            <Content />
        </Container>
    )
}

export default Home