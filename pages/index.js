import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react"
import Link from "next/link"
import {signIn, signOut,useSession} from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  return (
    <div className={styles.container}>
      <Head>
        <title>Auth Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            Not signed in <br/>
            <button onClick={signIn}>Sign In</button>
          </>
        )}
        {
          session && (
            <>
              Signed in as {session.user.email} <br/>
              <div>You can now access our super secret pages</div>
              <button>
                <Link href="/secret">To the secret</Link>
              </button>
              <button onClick={signOut}>Sign out</button>
            </>
          )
        }
      </main>
    </div>
  )
}
