import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App, { Container } from 'next/app';
import Head from 'next/head'; import React from 'react';
import MenuAppBar from '../components/MenuAppBar';
import Grid from '@material-ui/core/Grid';
import theme from '../themes/theme';

class MyApp extends App {

    componentDidMount() {
        // Remove the server-side injected CSS. 
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Head><title>AJ' Books</title> </Head> 
                <ThemeProvider theme={theme}>
                <CssBaseline />
                <MenuAppBar />
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Component { ...pageProps } />
                </Grid>
                </ThemeProvider> 
            </Container > 
        );
    }
}

export default MyApp; 