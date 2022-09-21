import "../styles/globals.css";

import Header from "../components/master/Header";
import Footer from "../components/master/Footer";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { SessionProvider } from "next-auth/react"
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import LoadingOverlay from "../components/shared/LoadingOverlay";
import Head from "next/head";
import "@material-tailwind/react/tailwind.css";
import { IHomeProps } from '../interfaces/IHomeProps';

export interface IAppProps {
  Component: any;
  pageProps: IHomeProps;
  router: any;
}

const MyApp: React.FC<IAppProps> = ({ Component, pageProps, router }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#55add1",
        light: "#FD6820",
      },
      secondary: {
        main: "#43b941",
        dark: "black",
      },
      // grey: '#818181'
    },
    typography: {
      fontFamily: [
        "Titillium",
        "Work Sans",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  const queryClientRef = React.useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  const [title, setTitle] = useState(Component.name);
  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogoBar, setShowLogoBar] = useState(true);
  const [isMainLoading, setIsMainLoading] = useState(false);

  pageProps = {
    ...pageProps,
    title,
    setTitle,
    search,
    setSearch,
    showMenu,
    setShowMenu,
    showSearch,
    setShowSearch,
    showLogoBar,
    setShowLogoBar,
    isMainLoading,
    setIsMainLoading,
  };

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={pageProps.session}>
          {/* <ProtectedRoute router={router} session={pageProps.session}> */}

          <MuiThemeProvider theme={theme}>
            <Container
              className="print-h-auto max-w-full w-full"
              style={{
                backgroundColor: "#fff",
                height: "calc(100vh - 60px)",
                width: "100vw",
                minWidth: "100vw",
                padding: 0,
                overflow: "hidden",
                overflowY: "auto",
              }}
              maxWidth={false}
            >
              {showLogoBar && (
                <Header
                  showSearch={showSearch}
                  pageTitle={title}
                  search={search}
                  setSearch={setSearch}
                  setIsMainLoading={setIsMainLoading}
                />
              )}

              <div
                style={{
                  marginTop: showLogoBar ? "100px" : "0px",
                  paddingBottom: "0px",
                  height: "100%",
                }}
              >
                {isMainLoading && <LoadingOverlay />}

                <Head>
                  <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                  />
                </Head>

                <Component {...pageProps} />
              </div>

              {showMenu && <Footer setIsMainLoading={setIsMainLoading} />}
            </Container>
          </MuiThemeProvider>

          {/* </ProtectedRoute> */}
        </SessionProvider>
      </Hydrate>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default MyApp;
