import Link from 'next/link';

export default function Home() {
  return (
    <div>
          Hello World from Panaverse DAO! Shahid Akram Butt
          <br/>
          <Link href="/zia">Go to Sir Zia page</Link>
          <br/>
          <Link href="/zeeshan">Go to Sir Zeeshan page</Link>
          <br/>
          <Link href="/hira">Go to Miss Hira page</Link>
          <br/>
          You can also create a dynamic page by entering this URL in the browser: http://localhost:3000/shahid or any name
    </div>
  )
}