import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LanguagesList from "../components/homepage/language-select/LanguagesList";
import Languages from "../components/homepage/language-select/Languages";
import Homepage from "../components/homepage/Homepage";

const Home: NextPage = () => {
  return (
      <div>
          <Homepage />
      </div>
  )
}

export default Home
