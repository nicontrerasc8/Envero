import Head from 'next/head'
import React from 'react'

const MetaTags = ({
     title ='SuMarket - Tienda online de productos orgánicos',
     description = ''
}) => {
     return <Head>
          <title>{title}</title>
          <meta name='description' content={description}/>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-6NPEF0B5KT"></script>
     </Head>
}

export default MetaTags
