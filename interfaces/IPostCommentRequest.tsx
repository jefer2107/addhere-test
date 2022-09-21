
export interface IPostCommentRequest {
    PostComentarioNo: number;
    PostNo: number;
    UsuarioNo: number;
    Comentario: string;
    DtCadastro: Date;
    Blinativo: boolean;
}
