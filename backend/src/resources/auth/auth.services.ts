import bcrypt from 'bcryptjs';
import { LoginDto } from './auth.types';
import { Usuario } from '../../models/Usuario';
import { TiposUsuarios } from '../tipoUsuario/tipoUsuario.constants';

export const checkCredentials = async ({
  email,
  senha,
}: LoginDto): Promise<Usuario | null> => {
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) return null;
  const ok = await bcrypt.compare(senha, usuario.senha);
  //const ok = senha == usuario.senha;
  return ok ? usuario : null;
};

export const checkIsAdmin = async (id: string): Promise<boolean> => {
  const usuario = await Usuario.findOne({ where: { id } });
  if (!usuario) return false;
  return usuario.tipoUsuarioId === TiposUsuarios.ADMIN;
};
