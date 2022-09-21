
export interface IPostComment {
    postComentarioNo: number;
    postNo: number;
    usuarioNo: number;
    usrImg: string;
    imgUrl: string;
    usrNome: string;
    comentario: string;
    dtCadastro: Date;
    usrNomeHtml?: string;
    comentarioHtml?: string;
}
