import Link from 'next/link';

export default function GiveName({ params}: {
    params: { name: string },
    
  }) {
    console.log(params);
    
    
      return (
        <div>
              My name is {params.name}.
              <br/>
          <Link href="/">Home Page</Link>
        </div>
      )
    }