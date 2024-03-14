import Link from "next/link";
import Image from "next/image";
const events = ({data}) => {
    return (
        <>
            <div>
              <div className="event_container">
            {data.map((ev)=> (
                <Link  key={ev.id} href ={`/events/${ev.id}`}>
                  <div className="event_card">
                <Image alt={ev.title} width={300} height={300} src={ev.image} />
                <h2 className="event_title">{ev.title}</h2>
                </div>
                </Link>
            ))}
            </div>  
            </div>
        </>
    )
}

export default events;

export async function  getStaticProps(){
    const {events_categories} = await import('/data/data.json');
    return {
      props:{
        data:events_categories,
      },
    };
  } 
