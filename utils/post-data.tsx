import { Company, User } from "@prisma/client";
import axios from "axios";
import { ISessionUser } from "../interfaces/ISessionUser";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
};
const fileHeaders = {
  "Content-Type": "multipart/form-data",
};

const postInit = (data: any) => ({
  method: "POST",
  headers,
  body: JSON.stringify(data),
});

const postFileInit = (formData: FormData) => ({
  method: "POST",
  body: formData,
});

const putInit = (data: any) => ({
  method: "PUT",
  headers,
  body: JSON.stringify(data),
});

const deleteInit = () => ({
  method: "DELETE",
  headers,
});

// ************************** SNAPIV *********************

export const getUserByEmailOrCreate = async (
  sessionUser: ISessionUser
): Promise<User> => {
  const res = await axios.get(`${API_URL}/user/${sessionUser.email}`);
  return res.data;
};
// ************************** COMPANY *********************
export const getCompanyAll = async (): Promise<Company[]> => {
  const res = await axios.get(`${API_URL}/company`);
  return res.data;
};

// ************************** ANTERIORES

// export const upsertPost = async (
//   userId: number,
//   newPost: IPost
// ): Promise<IPost> => {
//   try {
//     const data = {
//       PostNo: newPost?.postNo || null,
//       TipoPostNo: +(process.env.NEXT_PUBLIC_POST_USER_TYPE || 1),
//       CategoriaProdutoNo: newPost.categoriaProdutoNo,
//       UsuarioNo: userId,
//       Titulo: newPost.titulo,
//       BreveDescricao: newPost.conteudo?.slice(0, 130) || "",
//       Conteudo: newPost.conteudo,
//       DtCadastro: newPost.dtCadastro,
//       DtUltimaModificacao: newPost.dtModificacao,
//       ImgCapa: null,
//       MetatagsAlt: "",
//       Blinativo: false,
//     };

//     const res =
//       (data?.PostNo || 0) > 0
//         ? await fetch(`${API_URL}/post/post/${data.PostNo}`, putInit(data))
//         : await fetch(`${API_URL}/post/post/${userId}`, postInit(data));

//     const success = await res.json();
//     return success;
//   } catch (error) {
//     console.log("upsertPost", error.message);
//     return Promise.reject(error.message);
//   }
// };

// // export const upsertUserPicture = async (userId: number, newUserPicture: IUserPicture): Promise<IUserPicture> => {

// //     const data = {
// //         imagemNo: newUserPicture?.imagemNo || null,
// //         imagemTipo: newUserPicture?.imagemTipo || process.env.NEXT_PUBLIC_USER_IMAGE_GALLERY,
// //         imgUrl: newUserPicture?.imgUrl,
// //         blPadrao: newUserPicture?.blPadrao || true,
// //         extensao: newUserPicture?.extensao,
// //         metaTagAlt: newUserPicture?.metaTagAlt,
// //         metaTagTitle: newUserPicture?.metaTagTitle,
// //         ordem: newUserPicture?.ordem
// //     };

// //     const res = postUserBackgroundImage(file, us)

// //     const success = await res.json();
// //     return success;
// // }

// export const postLike = async (
//   postId: number,
//   userId: number
// ): Promise<boolean> => {
//   const like_res = await fetch(
//     `${API_URL}/post/curtirpost/${postId}/${userId}`,
//     postInit({ data: "" })
//   );
//   const res = await like_res.text();
//   const success = Number(res) > 0;
//   return success;
// };

// export const postDislike = async (
//   postId: number,
//   userId: number
// ): Promise<boolean> => {
//   const like_res = await fetch(
//     `${API_URL}/post/delcurtidapost/${postId}/${userId}`,
//     deleteInit()
//   );
//   const success = (await like_res.text()) === "true";
//   return success;
// };

// export const postDisable = async (post: IPost): Promise<boolean> => {
//   const res = await fetch(
//     `${API_URL}/post/desativar/${post.postNo}/${post.blInativo}`
//   );
//   const success = (await res.text()) === "true";
//   return success;
// };

// export const upsertPostComment = async (
//   newPost: IPostComment
// ): Promise<IPostComment> => {
//   const data = {
//     PostComentarioNo: newPost?.postComentarioNo || null,
//     PostNo: newPost?.postNo,
//     UsuarioNo: newPost?.usuarioNo,
//     Comentario: newPost?.comentario,
//     DtCadastro: newPost?.dtCadastro,
//     Blinativo: false,
//   } as IPostCommentRequest;

//   const res = data.PostComentarioNo
//     ? await fetch(
//         `${API_URL}/postComentario/${data.PostComentarioNo}`,
//         putInit(data)
//       )
//     : await fetch(`${API_URL}/postComentario`, postInit(data));

//   const success = await res.json();
//   return success;
// };

// export const userPostImage = async (
//   file: File,
//   imageNo: number
// ): Promise<string> => {
//   var formdata = new FormData();
//   formdata.append("file", file, file.name);
//   const res = await fetch(
//     `${API_URL}/user/uploadImage/${imageNo}`,
//     postFileInit(formdata)
//   );
//   const imgUrl = await res.text();
//   return imgUrl;
// };

// export const userDeleteImage = async (imageNo: number): Promise<boolean> => {
//   const res = await fetch(
//     `${API_URL}/user/deleteImage/${imageNo}`,
//     deleteInit()
//   );
//   const wasDeleted = await res.text();
//   return !!wasDeleted;
// };

// export const postPostImage = async (
//   file: File,
//   postNo: number
// ): Promise<string> => {
//   var formdata = new FormData();
//   formdata.append("file", file, file.name);
//   const res = await fetch(
//     `${API_URL}/post/upload/${postNo}`,
//     postFileInit(formdata)
//   );
//   const imgUrl = await res.text();
//   return imgUrl;
// };

// export const postDeleteImage = async (postNo: number): Promise<boolean> => {
//   const res = await fetch(`${API_URL}/post/image/${postNo}`, deleteInit());
//   const wasDeleted = await res.text();
//   return !!wasDeleted;
// };

// export const postUserAvatarImage = async (
//   file: File,
//   usuarioNo: number
// ): Promise<string> => {
//   var formdata = new FormData();
//   formdata.append("file", file, file.name);
//   const res = await fetch(
//     `${API_URL}/usuario/uploadAvatar/${usuarioNo}`,
//     postFileInit(formdata)
//   );
//   const imgUrl = await res.text();
//   return imgUrl;
// };

// export const postUserBackgroundImage = async (
//   file: File,
//   usuarioNo: number
// ): Promise<string> => {
//   var formdata = new FormData();
//   formdata.append("file", file, file.name);
//   const res = await fetch(
//     `${API_URL}/usuario/uploadBackground/${usuarioNo}`,
//     postFileInit(formdata)
//   );
//   const imgUrl = await res.text();
//   return imgUrl;
// };

// export const postUserGalleryImage = async (
//   file: File,
//   usuarioNo: number,
//   imagemNo: number = -1
// ): Promise<IUserPicture> => {
//   var formdata = new FormData();
//   formdata.append("file", file, file.name);
//   const res = await fetch(
//     `${API_URL}/usuario/uploadImagemGaleria/${usuarioNo}/${imagemNo}`,
//     postFileInit(formdata)
//   );
//   const imagem = await res.json();
//   return imagem;
// };

// export const deleteUserGalleryImage = async (
//   imagemNo: number
// ): Promise<boolean> => {
//   const res = await fetch(
//     `${API_URL}/usuario/deleteImagemGaleria/${imagemNo}`,
//     deleteInit()
//   );
//   const wasSuccess = await res.json();
//   return !!wasSuccess;
// };

// export const updateUserGalleryImageTitle = async (
//   imagemNo: number,
//   title: string,
//   subtitle: string
// ): Promise<IUserPicture> => {
//   const data = {
//     title,
//     subtitle,
//   };
//   const res = await fetch(
//     `${API_URL}/usuario/updateImagemGaleriaTitulo/${imagemNo}`,
//     postInit(data)
//   );
//   const img = await res?.json();
//   return img;
// };

// export const postDestination = async (
//   title: string,
//   country: string,
//   description: string,
//   usuarioNo: number
// ) => {
//   const data = {
//     title,
//     usuarioNo,
//     country,
//     dtStart: new Date(),
//     dtEnd: new Date(),
//   };

//   const res = await fetch(`${API_URL}/destino`, postInit(data));
//   const success = await res.json();
//   return success;
// };

// export const deleteDestination = async (destinoNo: number) => {
//   const res = await fetch(`${API_URL}/destino/${destinoNo}`, deleteInit());
//   const success = await res.json();
//   return success;
// };

// export const postPreference = async (
//   title: string,
//   community: string,
//   userId: number
// ) => {
//   const data = {
//     title,
//     user_profiles: [userId],
//     community,
//     published_at: new Date(),
//     created_by: userId,
//     updated_by: userId,
//   };

//   const res = await fetch(`${API_URL}/preferences`, postInit(data));
//   const success = await res.json();
//   return success;
// };

// export const putUser = async (user: IUser): Promise<IUser> => {
//   const data = {
//     ...user,
//     dtCadastro: new Date(),
//     isNewUser: false,
//   };

//   const res = await fetch(
//     `${API_URL}/usuario/${user.usuarioNo}`,
//     putInit(data)
//   );
//   const success = await res.json();
//   return success;
// };

// /* Esse método excluirá todas as preferencias anteriores do usuário e incluirá as novas.
//  * As novas são exclusivamente itens de uma lista já pré-definida.
//  */
// export const postReplaceUserPreference = async (
//   usuarioNo: number,
//   preferences: IPreference[]
// ) => {
//   if (preferences?.length <= 0) {
//     return false;
//   }

//   const data = {
//     preferenciasNo: preferences.map((m) => m.id),
//     usuarioNo,
//   };

//   const res = await fetch(
//     `${API_URL}/preferencia/preferenciasPorUsuario`,
//     postInit(data)
//   );
//   const success = await res.json();
//   return success;
// };

// // ***** MENSAGENS

// // [HttpPost()]
// // public async Task<dynamic> PostMensagem([FromBody] SnMensagem mensagem)
// // {
// //     return await _mensagemService.InsertMensagem(mensagem);
// // }
// export const postMessage = async (message: IMessage) => {
//   const data = {
//     ...message,
//     dtCadastro: new Date(),
//   };

//   const res = await fetch(`${API_URL}/mensagem`, postInit(data));
//   const success = await res.json();
//   return success;
// };

// // [HttpDelete("{mensagemNo}")]
// // public async Task<dynamic> DeleteMensagem(Int32 mensagemNo)
// // {
// //     return await _mensagemService.DeleteMensagem(mensagemNo);
// // }
// export const deleteMessage = async (messageNo: number) => {
//   const res = await fetch(`${API_URL}/mensagem/${messageNo}`, deleteInit());
//   const success = await res.json();
//   return success;
// };

// //PUT Edita um mensagem existente filtrado pelo postId
// // [HttpPut("{mensagemNo}")]
// // public async Task<dynamic> EditPost(int mensagemNo, [FromBody] SnMensagem mensagem)
// // {
// //     return await _mensagemService.EditMensagem(mensagemNo, mensagem);
// // }
// export const upsertMessage = async (message: IMessage): Promise<IMessage> => {
//   const data = {
//     ...message,
//     mensagemNo: message?.mensagemNo || null,
//     dtCadastro: new Date(),
//   } as IMessage;

//   const res = data.mensagemNo
//     ? await fetch(`${API_URL}/mensagem/${data.mensagemNo}`, putInit(data))
//     : await fetch(`${API_URL}/mensagem`, postInit(data));

//   const success = await res.json();
//   return success;
// };

// //PUT Autoriza ou rejeita uma mensagem
// // [HttpPut("autorizar/{mensagemNo}")]
// // public async Task<long> AutorizaMensagem(int mensagemNo, [FromBody] bool blAutorizado)
// // {
// //     return await _mensagemService.AutorizarMensagem(mensagemNo, blAutorizado);
// // }
// export const authorizeMessage = async (
//   messageNo: number,
//   blAutorizado: boolean
// ): Promise<IMessage> => {
//   const data = {
//     blAutorizado,
//   };

//   const res = await fetch(
//     `${API_URL}/mensagem/autorizar/${messageNo}`,
//     putInit(data)
//   );

//   const success = await res.json();
//   return success;
// };
