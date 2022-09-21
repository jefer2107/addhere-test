
export interface IPost {
    postNo: number;
    usrImg: string;
    imgUrl: string;
    usrNome: string;
    conteudo: string;
    titulo: string;
    dtCadastro: Date;
    dtModificacao: Date;
    categoriaProdutoNo: number;
    usuarioNo: number;
    usrNomeHtml?: string;
    conteudoHtml?: string;
    tituloHtml?: string;
    blInativo: boolean;
    likes: number[]; // ids dos usuários que curtiram
}
