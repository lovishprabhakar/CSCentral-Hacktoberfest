import * as dotenv from 'dotenv';

async function globalSetup(): Promise<void> {
  dotenv.config({ override: true });

  if (!process.env.local) {
    console.log('⚠️  URL:', process.env.PROD_BASE_URL);
  } else {
    console.log('⚠️  URL:', process.env.LOCAL_BASE_URL);
  }
}

export default globalSetup;
