import Link from "next/link";
import Image from 'next/image'

const eventcatpage = ({data,pagename}) => {
    return (
      <>
        <h1 className="cat_title">Events in {pagename}</h1>
      <div>         
      <div className="cat_event_container">
       {data.map((ev)=>(
        <div className="cat_card">
        <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
        <Image alt={ev.title} width={380} height={250} src={ev.image}/>
        <h2 className="cat_event_title">{ev.title}</h2>
        </Link>
        <p className="cat_event_desc">{ev.description}</p>
        </div>
        ))}
      </div>
      </div>
      </>
    );   
  };
  
  export default eventcatpage;



  export async function getStaticPaths(){
    const {events_categories} = await import ('/data/data.json');
    const allPaths = events_categories.map((ev)=>{   
      return{
        params: {
          cat: ev.id.toString(),
        },
      };
    });
    return{
      paths:allPaths,
      fallback:true,
    };
}


export async function  getStaticProps(context){
  const id= context.params.cat;
  const {allEvents} = await import('/data/data.json');
  const data=allEvents.filter((ev)=>
    ev.city == id);

  return {
    props:{data,pagename:id}
  };
} 
  