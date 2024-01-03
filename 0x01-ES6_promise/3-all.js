import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  return Promise.all([photo, user])
    .then(([vPhoto, vUser]) => {
      console.log(`${vPhoto.body} ${vUser.firstName} ${vUser.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
