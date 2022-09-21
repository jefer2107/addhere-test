import { IPost } from "../interfaces/IPost";
import { getFileName } from "./urls";
import { GlobalService } from "../utils/global.service";
import { IPostComment } from "../interfaces/IPostComment";
import { IUserPicture } from "../interfaces/IUserPicture";
import { IMessage } from "../interfaces/IMessage";
import { Patient, User } from "@prisma/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
const glb = new GlobalService();

export const getPatientsByUserId = async (userId: string): Promise<Patient[]> => {
  const patient_res = await fetch(`${API_URL}/patient/byUserId/${userId}`);
  const patient = await patient_res.json();
  return patient;
};

export const getUser = async (id: string): Promise<User> => {
  // const user_res = await fetch(`${API_URL}/user-profiles/${id}`);
  const user_res = await fetch(`${API_URL}/user/byId/${id}`);
  const user = await user_res.json();
  return user;
};

export const getUsers = async () => {
  // usuariosPorCategoriaId poderia ser mais eficiente para não gerar páginas estáticas para usuários que estejam na loja, mas não na comunidade
  // const url = `${API_URL}/usuario/usuariosPorCategoriaId/${process.env.NEXT_PUBLIC_COMMUNITY_USER_CATEGORIES_ID}`;
  const url = `${API_URL}/usuario`;
  const users_res = await fetch(url);
  const users = await users_res.json();
  return users;
};

// Além das palavras-chave, trará usuários ativos e de categorias específicas
export const getUsersFilteredBySearch = async (
  search: string,
  minCharsToSearch: number
) => {
  if (search?.length < minCharsToSearch) {
    return null;
  }
  const users_res = await fetch(
    `${API_URL}/usuario/usuariosPorPalavraChave/${process.env.NEXT_PUBLIC_COMMUNITY_USER_CATEGORIES_ID}/${search}`
  );
  const users = await users_res.json();
  return users;
};

// No BD, representam as SubCategoriasProduto
export const getPreferencesByUserId = async (userId: number) => {
  const preference_res = await fetch(
    `${API_URL}/preferencia/preferenciasPorUsuario/${userId}`
  );
  const preferences = await preference_res.json();
  return preferences;
};

// No BD, representam as SubCategoriasProduto
export const getPreferences = async () => {
  // const preferences_res = await fetch(`${API_URL}/preferences`);
  const preference_res = await fetch(`${API_URL}/preferencia/preferencias`);
  const preference = await preference_res.json();
  return preference;
};
export const getPreference = async (preferenciaNo: number) => {
  // const preferences_res = await fetch(`${API_URL}/preferences`);
  const preference_res = await fetch(
    `${API_URL}/preferencia/preferencia/${preferenciaNo}`
  );
  const preference = await preference_res.json();
  return preference;
};

export const getCommunity = async (communityId: number) => {
  // const communities_res = await fetch(`${API_URL}/communities/${communityId}`);
  const communities_res = await fetch(
    `${API_URL}/comunidade/comunidade/${communityId}`
  );
  const communities = await communities_res.json();
  return communities;
};

// No BD representam as CategoriasProduto e na API chamam areainteresse
export const getCommunities = async () => {
  const communities_res = await fetch(`${API_URL}/comunidade/comunidades`);
  const communities = await communities_res.json();
  return communities;
};

// export const getBanners = async () => {
//     const banners_res = await fetch(`${API_URL}/banners`);
//     const banners = await banners_res.json();
//     return banners;
// }

export const getBannersByCommunity = async (communityId: number) => {
  // const banners_res = await fetch(`${API_URL}/banners?community=${communityId}`);
  const banners_res = await fetch(`${API_URL}/banner/banners/${communityId}`);
  const banners = await banners_res.json();
  return banners;
};

export const getDestinations = async (userId: number) => {
  // const destinations_res = await fetch(`${API_URL}/destinations?user_profile=${userId}`);
  const destinations_res = await fetch(
    `${API_URL}/destino/destinosPorUsuario/${userId}`
  );
  const destinations = await destinations_res.json();
  return destinations;
};

export const getUserPictures = async (userId: number) => {
  // const userPictures_res = await fetch(`${API_URL}/user-pictures?user_profile=${userId}`);
  const userPictures_res = await fetch(
    `${API_URL}/usuario/imagensPorUsuario/${userId}`
  );
  const userPictures = await userPictures_res.json();
  return userPictures;
};

export const getUserPicturesByType = async (
  userId: number,
  enImageType: number
): Promise<IUserPicture[]> => {
  // const userPictures_res = await fetch(`${API_URL}/user-pictures?user_profile=${userId}`);
  const userPictures_res = await fetch(
    `${API_URL}/usuario/imagensPorUsuarioETipo/${userId}/${enImageType}`
  );
  const userPictures = await userPictures_res.json();
  return userPictures;
};

export const getPostsByUserId = async (
  userId: number,
  search: string = null
): Promise<IPost[]> => {
  // const userPosts_res = await fetch(`${API_URL}/posts?user_profile=${userId}`);
  const userPosts_res = await fetch(`${API_URL}/post/posts/${userId}`);
  const userPosts = await userPosts_res.json();
  return userPosts.map((m: IPost) => postHtmlProperties(m, search));
};

export const getPosts = async (): Promise<IPost[]> => {
  // const post_res = await fetch(`${API_URL}/posts/`);
  const post_res = await fetch(`${API_URL}/post/posts`);
  const posts = await post_res.json();
  return posts.map((m: IPost) => postHtmlProperties(m, null));
};

export const getPost = async (
  postId: number,
  search: string = null
): Promise<IPost> => {
  const post_res = await fetch(`${API_URL}/post/post/${postId}`);
  const post = await post_res.json();
  return postHtmlProperties(post, search);
};

export const getPostCommentsByPost = async (
  postNo: number,
  search: string = null
): Promise<IPostComment[]> => {
  const postComment_res = await fetch(
    `${API_URL}/postComentario/porPost/${postNo}`
  );
  const postComments = await postComment_res.json();
  return highlightSearchOnComments(postComments, search);
};

export const getPostComment = async (
  postCommentNo: number
): Promise<IPostComment> => {
  const postComment_res = await fetch(
    `${API_URL}/postComentario/${postCommentNo}`
  );
  const postComment = await postComment_res.json();
  return postComment;
};

export const getPostsByCommunityId = async (
  communityId: number,
  search: string = null
): Promise<IPost[]> => {
  // const post_res = await fetch(`${API_URL}/posts?community=${communityId}`);
  const post_res = await fetch(
    `${API_URL}/post/postsPorComunidade/${communityId}`
  );
  const posts = await post_res.json();
  return posts.map((post: IPost) => postHtmlProperties(post, search));
};

export const getPostsFilteredBySearch = async (
  search: string
): Promise<IPost[]> => {
  const posts = await getPosts();
  return highlightSearch(filterPosts(posts, search), search);
};

export const getPostsByCommunityIdFilteredBySearch = async (
  communityId: number,
  search: string
): Promise<IPost[]> => {
  const posts = await getPostsByCommunityId(communityId);
  return highlightSearch(filterPosts(posts, search), search);
};

const filterPosts = (posts: IPost[], search: string): IPost[] => {
  if (glb.isNullOrEmpty(search)) {
    return posts;
  }

  return posts.filter(
    (f) =>
      glb.ContemSemAcentos(search, f.conteudo) ||
      glb.ContemSemAcentos(search, f.titulo) ||
      glb.ContemSemAcentos(search, f.usrNome)
  );
};

const highlightSearch = (posts: IPost[], search: string): IPost[] => {
  const isEmpty = glb.isNullOrEmpty(search);

  // return posts.map(m => ({
  //         ...m,
  //         usrNomeHtml: isEmpty ? m.usrNome : glb.ReplaceAll(m.usrNome, search, `<span style="background-color: red; color: white">${search}</span>`),
  //         tituloHtml: isEmpty ? m.titulo : glb.ReplaceAll(m.titulo, search, `<span style="background-color: red; color: white">${search}</span>`),
  //         conteudoHtml: isEmpty ? m.conteudo.replaceAll('\n', '<br />') : glb.ReplaceAll(m.conteudo, search, `<span style="background-color: red; color: white">${search}</span>`)
  //     })
  // );
  return posts.map((m) => postHtmlProperties(m, search));
};

const postHtmlProperties = (post: IPost, search: string): IPost => {
  const isEmpty = glb.isNullOrEmpty(search);
  return {
    ...post,
    usrNomeHtml: isEmpty
      ? post.usrNome
      : glb.ReplaceAll(
          post.usrNome,
          search,
          `<span style="background-color: red; color: white">${search}</span>`
        ),
    tituloHtml: isEmpty
      ? post.titulo
      : glb.ReplaceAll(
          post.titulo,
          search,
          `<span style="background-color: red; color: white">${search}</span>`
        ),
    conteudoHtml: !glb.isNullOrEmpty(post.conteudo)
      ? isEmpty
        ? glb.ReplaceAll(post.conteudo, "\n", "<br />")
        : glb.ReplaceAll(
            post.conteudo,
            search,
            `<span style="background-color: red; color: white">${search}</span>`
          )
      : null,
  };
};

const highlightSearchOnComments = (
  postComments: IPostComment[],
  search: string
): IPostComment[] => {
  const isEmpty = glb.isNullOrEmpty(search);

  return postComments.map((m) => ({
    ...m,
    usrNomeHtml: isEmpty
      ? m.usrNome
      : glb.ReplaceAll(
          m.usrNome,
          search,
          `<span style="background-color: red; color: white">${search}</span>`
        ),
    comentarioHtml: isEmpty
      ? m.comentario.replaceAll("\n", "<br />")
      : glb.ReplaceAll(
          m.comentario,
          search,
          `<span style="background-color: red; color: white">${search}</span>`
        ),
  }));
};

// Telegram
export const telegramUserExists = async (
  phoneNumber: string
): Promise<boolean> => {
  const userExists_res = await fetch(
    `${API_URL}/telegram/userExists/${phoneNumber}`
  );
  const userExists = await userExists_res.json();
  return userExists;
};

//GET Mensagens do usuario
// [HttpGet("deUsuario/{usuarioNo}")]
// public async Task<IEnumerable<dynamic>> GetMensagemDoUsuario(Int32 usuarioNo)
// {
//     return await _mensagemService.MensagensDePorUsuarioId(usuarioNo);
// }
export const getMessagesFrom = async (userId: number): Promise<IMessage[]> => {
  const messages_res = await fetch(`${API_URL}/mensagem/deUsuario/${userId}`);
  const messages = await messages_res.json();
  return messages;
};

// //GET Mensagens para usuario
// [HttpGet("paraUsuario/{usuarioNo}")]
// public async Task<IEnumerable<dynamic>> GetMensagemParaUsuario(Int32 usuarioNo)
// {
//     return await _mensagemService.MensagensParaPorUsuarioId(usuarioNo);
// }
export const getMessagesTo = async (userId: number): Promise<IMessage[]> => {
  const messages_res = await fetch(`${API_URL}/mensagem/paraUsuario/${userId}`);
  const messages = await messages_res.json();
  return messages;
};

// //GET Comentario específico
// [HttpGet("{mensagemNo}")]
// public async Task<dynamic> GetMensagem(Int32 mensagemNo)
// {
//     return await _mensagemService.GetMensagem(mensagemNo);
// }
export const getMessage = async (messageNo: number): Promise<IMessage> => {
  const message_res = await fetch(`${API_URL}/mensagem/${messageNo}`);
  const message = await message_res.json();
  return message;
};

export const getMessageDePara = async (
  deUsuarioNo: number,
  paraUsuarioNo: number
): Promise<IMessage | null> => {
  try {
    const message_res = await fetch(
      `${API_URL}/mensagem/${deUsuarioNo}/${paraUsuarioNo}`
    );
    const message = await message_res.json();
    return message as IMessage;
  } catch {}
  return null;
};
