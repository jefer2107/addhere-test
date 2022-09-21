export interface IProps {
    setTitle: React.Dispatch<string>;
    setSearch: React.Dispatch<string>;
    title: string;
    search: string;
    showMenu: boolean;
    showSearch: boolean;
    showLogoBar: boolean;
    isMainLoading: boolean;
    setShowMenu: React.Dispatch<boolean>;
    setShowSearch: React.Dispatch<boolean>;
    setShowLogoBar: React.Dispatch<boolean>;
    setIsMainLoading: React.Dispatch<boolean>;
}
