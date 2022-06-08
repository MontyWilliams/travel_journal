import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Places from './components/Places'
import data from './data'

function App() {
  
  const location = data.map(place => {
    return(
      <Places
      title={place.title}
      location={place.location}
      googleMapsUrl={place.googleMapsUrl}
      start={place.startDate}
      endDate={place.endDate}
      description={place.description}
      img={place.imageUrl}
      />  
    )
  })

  return (
    <div className="containerB">
    <div className="container">
            <Nav />
             {location}
             <Footer />
    </div>
    </div>
  );
}

export default App;
