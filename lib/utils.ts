import slugify from 'slugify';

export const toSlug = (text: string) => {
  return slugify(text, {
    lower: true,
    strict: true,
    locale: 'vi', // ใส่เพื่อให้รองรับอักขระพิเศษได้กว้างขึ้น
  });
};