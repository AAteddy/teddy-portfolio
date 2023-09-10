import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'j4fvcfbm',
    dataset: 'production',
    apiVersion: '2023-09-10',
    useCdn: true,
    token: 'skE8vxdP4HJpXLyJqiOUA3mXmjMSFJhqw2YeeKM5o7DwfhRBpxe2dvQSA5xTvtjlAuzntXSoRBWrMpYBTyL4kE51jEE15Me0YZ6uqeS8wqaxWsB1kZox8qU8emj5AsJnAangxvSfk6vEqiMaDVRIknLiKPzqrybDex09bo9yK6Wxhn5ZQFRw',
});