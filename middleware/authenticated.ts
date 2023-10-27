import { authStore } from '~/store/auth'

export default function () {
  if (!authStore.token) {
    // Se o token não estiver presente, o usuário não está autenticado, então retorne false.
    return false;
  }
  // Se o token estiver presente, o usuário está autenticado, então retorne true.
  return true;
}
