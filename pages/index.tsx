import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import Trends from '../components/Trends'

export default function Home() {
  return (
    <div className="container mx-auto  h-screen text-white">
      <Head>
        <title>Home / Twitter</title>
        <link rel="shortcut icon" href="/twitter.ico" />
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full ">
          <Main />
          <Trends />
        </div>
      </div>
    </div>
  )
}
