import { IBanner } from './IBanner';
import { ICommunity } from './ICommunity';
import { IPost } from './IPost';
import { IProps } from './IProps';

export interface IHomeProps extends IProps {
  banners: IBanner[];
  communities: ICommunity[];
  posts: IPost[];
  dehydratedState: any;
  session: any;
  search: string;
  showMenu: boolean;
  setShowMenu: any;
  showSearch: boolean;
  setShowSearch: any;
  showLogoBar: boolean;
  setShowLogoBar: any;
  isMainLoading: boolean;
  setIsMainLoading: any;
}
