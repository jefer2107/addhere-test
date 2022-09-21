import { IUser } from '../interfaces/IUser';

export function isLoggedUser(userToCheck: IUser) {
    // TODO: Corrigir para resgate dinâmico do id a partir da sessão (falta gravar o id na sessão)
    // const [ session, loading ] = useSession();
    return true;
    // return userToCheck.email === session?.user.email;
}