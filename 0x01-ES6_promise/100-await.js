import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const respon_uploadPhoto = await uploadPhoto();
    const respon_createUser = await createUser();
    return {
      photo: respon_uploadPhoto,
      user: respon_createUser,
    };
  } catch (_) {
    return { photo: null, user: null };
  }
}
