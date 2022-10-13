import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LanguagesList from "../components/homepage/language-select/LanguagesList";
import Languages from "../components/homepage/language-select/Languages";

const Home: NextPage = () => {
  return (
      <div>
          <Languages />
      </div>
  )
}

export default Home
