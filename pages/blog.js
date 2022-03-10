import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  return <div className={styles.container}>
  <main className={styles.main}>
      <div >
      <Link href={'/blogpost/learn-javascript'}>
        <h2 className={styles.blogItemh3}>How to learn javascript in 2022?</h2></Link>
        <p>javascript is language use to create website</p>
      </div>
      <div className="blogItem">
        <h2>How to learn javascript in 2022?</h2>
        <p>javascript is language use to create website</p>
      </div>
      <div className="blogItem">
        <h2>How to learn javascript in 2022?</h2>
        <p>javascript is language use to create website</p>
      </div>
      
      </main>
    </div>
}

export default Blog