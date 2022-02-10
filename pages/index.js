import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Entusiasta em tecnologia e futuro programador! :)</p>
        <p>
          Esse é um exemplo de site - Você construirá um site igual a este{' '}
          <a href="http://localhost:3000/posts/first-post">no nosso tutorial!</a> 
        </p>
      </section>
    </Layout>
  )
}