
export interface IMessage {
    mensagemNo: number;
    deUsuarioNo: number;
    paraUsuarioNo: number;
    dtCadastro: Date;
    mensagemCorpo: string;
    blAutorizado: Boolean;
    blRejeitado: Boolean;
    deImgUrl: string;
    paraImgUrl: string;
    deUsrNome: string;
    paraUsrNome: string;
    dtAutorizacao: Date;
    deWhatsapp: string;
}

