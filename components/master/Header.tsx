import { useRouter } from "next/router";
import React from "react";
import { Button, makeStyles, TextField, useTheme } from "@material-ui/core";
import ButtonAppBar from "./ButtonAppBar";
import classNames from "classnames";
import { goBack } from "../../utils/nav";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { InputAdornment } from "@material-ui/core";
import { MIN_CHARS_TO_SEARCH } from "../../utils/params";
import Image from "next/image";

interface IHeaderProps {
  pageTitle: string;
  search: string;
  showSearch: boolean;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setIsMainLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    maxWidth: "100vw",
    zIndex: 1000,
    background: theme.palette.background.paper,
  },
  logo: {
    display: "grid",
    // gridTemplateColumns: '1fr 20px',
    margin: 5,
    width: "100%",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    maxWidth: 300,
  },
  title: {
    display: "grid",
    padding: "0",
    gap: "10px",
    gridTemplateColumns: "0.8fr 1.4fr 0.8fr",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    maxWidth: "100vw",
  },
  titleWithBack: {
    // gridTemplateColumns: '50px minmax(190px, 1fr) minmax(100px, 180px)',
    gridTemplateColumns: "0.8fr 1.4fr 0.8fr",
    gap: 20,
  },
  back: {
    textAlign: "left",
    paddingLeft: 10,
  },
  icnBack: {
    marginTop: 5,
    color: theme.palette.grey[500],
  },
  search: {
    width: "100%",
  },
  icnSearch: {
    color: theme.palette.grey[500],
  },
  searchContainer: {
    width: "100%",
    maxWidth: "100%",
    justifyContent: "end",
    textAlign: "right",
    paddingRight: 10,
  },
  inputSearch: {},
}));

// inputSearch: {
//     '& .MuiInput-underline:before': {
//         borderBottomColor: 'red',
//         backgroundColor: 'red'
//       },
// }
const Header: React.FC<IHeaderProps> = ({
  pageTitle,
  search,
  setSearch,
  showSearch,
  setIsMainLoading,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const router = useRouter();
  const isHome = router.pathname === "/";
  const classList = isHome
    ? classes.title
    : classNames(classes.title, classes.titleWithBack);

  const goBackHandler = (e: { preventDefault: () => void }) => {
    setIsMainLoading(true);
    goBack(router, e);
  };

  const handleChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    if (value.length >= MIN_CHARS_TO_SEARCH) {
      setSearch(value);
    }
  };

  const handleKeyUp = (e: any) => {
    if (e.keyCode === 27) {
      e.target.value = "";
      setSearch("");
    }
  };

  return (
    <div id="fcHeader" className={classes.root}>
      <ButtonAppBar pageTitle={pageTitle}></ButtonAppBar>

      <div className={classList}>
        <div className={`${classes.back} no-print`}>
          {!isHome && (
            <a href="#" onClick={goBackHandler}>
              <ArrowBackIosIcon className={classes.icnBack} />{" "}
            </a>
          )}
        </div>

        <Button href="/" onClick={() => setIsMainLoading(true)}>
          <div className={classes.logo}>
            <Image
              className={classes.img}
              src="/aplicacao_horizontal.png"
              alt="logomarca"
              width="130px"
              height="30px"
            />
          </div>
        </Button>

        <div className={`${classes.searchContainer} no-print`}>
          {showSearch && (
            <TextField
              className={classes.search}
              id="txtSearch"
              margin="normal"
              defaultValue={search}
              onChange={handleChange}
              onKeyDown={handleKeyUp}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="start"
                    className={classes.inputSearch}
                  >
                    <SearchIcon className={classes.icnSearch} />
                  </InputAdornment>
                ),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
