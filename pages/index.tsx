import Head from "next/head";
import React, { useEffect } from "react";
import { GetStaticProps } from "next";
import { IBanner } from "../interfaces/IBanner";
import { ICommunity } from "../interfaces/ICommunity";
import { makeStyles, useTheme } from "@material-ui/core";
import { IPost } from "../interfaces/IPost";
import { useQuery } from "react-query";
import { getPostsFilteredBySearch } from "../utils/fetch-data";
import { IProps } from "../interfaces/IProps";
import { MAIN_CONTENT_HEIGHT } from "../utils/params";
import Loading from "../components/shared/Loading";
import { useSession } from "../utils/next-auth-react-query";
import Link from "next/link";

export interface IHomeProps extends IProps {
  banners: IBanner[];
  communities: ICommunity[];
  posts: IPost[];
  dehydratedState: any;
  session: any;
  // search: string;
  // showMenu: boolean;
  // setShowMenu: any;
  // showSearch: boolean;
  // setShowSearch: any;
  // showLogoBar: boolean;
  // setShowLogoBar: any;
  // isMainLoading: boolean;
  // setIsMainLoading: any;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    height: MAIN_CONTENT_HEIGHT,
    background: theme.palette.background.paper,
  },
}));

const Home: React.FC<IHomeProps> = ({
  banners,
  communities,
  title,
  setTitle,
  search,
  setShowMenu,
  setShowSearch,
  setIsMainLoading,
  setShowLogoBar
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    setTitle("Saudações");
    setShowMenu(false);
    setShowSearch(false);
    setIsMainLoading(false);
    setShowLogoBar(true);
  }, [setTitle, setShowMenu, setShowSearch, setIsMainLoading, setShowLogoBar]);

  const [session, isLoading] = useSession();

  if (isLoading)
    return (
      <div className={classes.root}>
        <Loading />
      </div>
    );

  return (
    <div className={classes.root}>
      <Head>
        <title>{process.env.APPLICATION_PAGE_TITLE}</title>
        <meta
          name="description"
          content="Avaliação de transtornos de neurodesenvolvimento"
        />
      </Head>
      <div className="bg-gray-100 m-auto p-5 mt-20 max-w-5xl">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Avaliação de Transtornos de Neurodesenvolvimento?</span>
            <span className="block text-indigo-600">
              Comece agora!
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Link href="/patient">Iniciar</Link>
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="https://www.addhere.com.br"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Node/Next */
export const getServerSideProps: GetStaticProps = async (context) => {
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery("posts", getPosts);
  return {
    props: {
      // dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
