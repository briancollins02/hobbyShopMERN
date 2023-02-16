import type { UserDetails } from '@/types'
import Head from 'next/head'

const userDetails:UserDetails = {
  "name": "randomname",
  "age": 1000032,
  "pastOrders": [
    {
      "id": 1,
      "hasBeenDelivered": true,
      "name": "Mork Borg",
    }
  ]
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Dragonpunk</title>
        <meta name="description" content="A Hobby Shop with Games, Music and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <h1>Dragonpunk</h1>
      </div>
    </>
  )
}