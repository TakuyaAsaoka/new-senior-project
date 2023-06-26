'use client';

// import { Amplify } from 'aws-amplify';
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

// import awsExports from '../aws-exports';
// Amplify.configure(awsExports);

import styles from './page.module.css';
import Footer from '@/components/Footer';

// function Home({ signOut, user }) {
function Home() {
  return (
    <div>
      <main className={styles.main}>
        {/* {user ? (
          <>
            <h3>{user.username}</h3>
            <button onClick={signOut}>サインアウト</button>
          </>
        ) : (
          <h3>権限なし</h3>
        )} */}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
