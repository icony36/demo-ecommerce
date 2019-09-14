import React from "react";
import App, { Container } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShopProvider } from "../contexts/ShopContext";
import { BlogProvider } from "../contexts/BlogContext";
import CssBaseline from "@material-ui/core/CssBaseline";

class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps({ Component, ctx }) {
    //     let pageProps = {};

    //     if (Component.getInitialProps) {
    //         pageProps = await Component.getInitialProps(ctx);
    //     }

    //     return { pageProps };
    // }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <CssBaseline />
                <ShopProvider>
                    <BlogProvider>
                        <Navbar />
                        <Component {...pageProps} />
                    </BlogProvider>
                </ShopProvider>
                <Footer />
            </Container>
        );
    }
}

export default MyApp;
