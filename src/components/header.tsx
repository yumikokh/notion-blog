import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import { getBlogTitle } from '../lib/blog-helpers'

const navItems: { label: string; page?: string; link?: string }[] = [
  // { label: 'Home', page: '/' },
  // { label: 'Blog', page: '/blog' },
  // { label: 'Contact', page: '/contact' },
  // { label: 'Source Code', link: 'https://github.com/ijjk/notion-blog' },
]

const ogImageUrl = 'https://blog.ymkokh.com/og-image.png'

const Header = ({ titlePre = '', slug = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{getBlogTitle(titlePre)}</title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <meta name="og:title" content={getBlogTitle(titlePre)} />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@yumikokh" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
        <link
          rel="canonical"
          href={`https://blog.ymkokh.com${!slug ? '' : '/' + slug}`}
        ></link>
      </Head>
      <h1>
        <a href="/">{getBlogTitle()}</a>
      </h1>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
