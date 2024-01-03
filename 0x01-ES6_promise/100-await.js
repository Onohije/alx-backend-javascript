import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto()
    .then((resp) => resp)
    .catch(() => null);
  const user = await createUser()
    .then((resp) => resp)
    .catch(() => null);
  return { photo, user };
}
