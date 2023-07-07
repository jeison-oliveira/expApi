import { Usuario } from '../../models/Usuario';
import {
  CreateUsuarioDto,
  UpdateUsuarioDto,
  UsuarioDto,
} from './usuario.types';

export const getAllUsuarios = async (): Promise<Usuario[]> => {
  const usuarios = await Usuario.findAll();
  return usuarios.map((p) => p.toJSON());
};

export const createUsuario = async (
  usuario: CreateUsuarioDto,
): Promise<Usuario> => {
  return await Usuario.create(usuario);
};

export const getUsuario = async (id: string): Promise<Usuario | null> => {
  return await Usuario.findOne({ where: { id } });
};

export const updateUsuario = async (
  id: string,
  usuario: UpdateUsuarioDto,
): Promise<number | null> => {
  const usuarioToBeUpdated = await getUsuario(id);
  if (usuarioToBeUpdated == null) return null;
  const [affectedCount] = await Usuario.update(usuario, { where: { id } });
  return affectedCount;
};

export const buscaUsuarioPorEmail = async (
  email: string,
): Promise<UsuarioDto | null> => {
  return await Usuario.findOne({
    attributes: ['id', 'tipoUsuarioId', 'nome', 'email'],
    where: { email },
  });
};
