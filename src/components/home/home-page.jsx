import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Homepage = ({ data }) => {
  return (
    <div>
      <main>
        <div className="container">
          {data.map((ev) => (<Link key={ev.id} href={`/events/${ev.id}`}>
            <div className="card">
            <div className="city_img">
            <Image width={400} height={250} alt={ev.title} src={ev.image} />
            </div>
            <div className="desc">
            <h2 className="home_title" >{ev.title}</h2>
            <p className="home_desc" >{ev.description}</p>
            </div>
            </div>
          </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Homepage
