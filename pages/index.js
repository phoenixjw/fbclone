import Header from '@/components/Header'
import { getSession } from 'next-auth/react';
import Head from 'next/head'
import Login from '@/components/Login';
import Sidebar from '@/components/Sidebar';
import Feed from '@/components/Feed';
import Widgets from '@/components/Widgets';
import { db } from '@/firebase';
import { orderBy, collection, us } from 'firebase/firestore';
import { useCollection } from "react-firebase-hooks/firestore"



export default function Home({ session }) {
  if(!session) return <Login/>
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header/>

      <main className='flex'>
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </main>
      
    </div>

    
  );
}

export async function getServerSideProps(context) {
  //get the user
  const session = await getSession(context);

 
    
   
  return {
    props: {
      session,

    }
  }
}