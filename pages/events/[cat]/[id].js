import Image from 'next/image';
const page = ({ eventdata }) => {
  return (
    <>
      <h2 className='id_title'>{eventdata.title}</h2>
      <div className="id_container">
        <div className="id_desc">
          <Image alt={eventdata.title} width={1000} height={500} src={eventdata.image} />
          <p className='id_para'>{eventdata.description}</p>
        </div>
      </div>
    </>
  )
}
export default page;



export async function getStaticPaths() {
  const { allEvents } = await import('/data/data.json');
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}


export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import('/data/data.json');
  const eventdata = allEvents.find((ev) =>
    id == ev.id);

  return {
    props: { eventdata },
  };
} 