// eslint-disable-next-line no-unused-vars
import { createClient } from 'next-sanity';

// eslint-disable-next-line import/prefer-default-export
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-10-21', // Learn more: https://www.sanity.io/docs/api-versioning
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);
