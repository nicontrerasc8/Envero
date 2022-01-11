import Head from 'next/head'
import React from 'react'

const MetaTags = ({
     title = 'Envero - Tienda online de productos orgánicos',
     description = ''
}) => {
     return <Head>
          <title>{title}</title>
          <meta name='description' content={description}/>
     </Head>
}

export default MetaTags
