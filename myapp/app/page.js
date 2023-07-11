

import DonutCard from "@/components/DonutCard"


export async function fetchDonuts(){
  const res = await fetch('http://localhost:3000/api/donut', {cache: 'no-store'})

  return res.json()
}


export default  async function Home() { 
  const donuts = await fetchDonuts()

  return (
    <main>
      <h2>Doonuts</h2>
     <div>
      {donuts?.length > 0 
       ? donuts.map((donut) => (
        <DonutCard key={donut._id} donut={donut}/>
      )) : <h3 className={classes.noBlogs}>No blogs are currently in the</h3>}
     </div>
    </main>
  )
}
