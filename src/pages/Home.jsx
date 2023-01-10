import Header, { Logo } from "@/components/project/Header"
import Container from "@/components/design/Container";
import Grid from "@/components/design/Grid";
import Footer from "@/components/design/Footer";
import Hero from "@/components/project/Hero";
import Button from "@/components/buttons/Button";

import { MdSearch } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

import Head from "next/head";
import Image from "next/image";

export default function HomePage() {


    return (
        <>
            <Head>
                <title>NITH Results</title>
            </Head>
            <Header>
                <Container>
                    <Logo>
                        <Image src="/Logo.png" height={24} width={24} />
                        NITH</Logo>
                </Container>
            </Header>
            <Hero>
                <Container>
                    <h1>NITH  Result Website</h1>
                    <Button nature="primary">Search <MdSearch /> </Button>
                    <Button>Analytics <TbBrandGoogleAnalytics /> </Button>
                </Container>
            </Hero>
            <Grid>


            </Grid>

            <Footer>
                NITH Results Website
            </Footer>
        </>
    )

}