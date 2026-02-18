import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { logout } from '../lib/auth';
import { tripData } from '../lib/tripData';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const isAuth = localStorage.getItem('thailand-auth');
    if (isAuth !== 'authenticated') {
      router.push('/login');
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (!authenticated) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>🇹🇭 {tripData.overview.title}</h1>
          <p className={styles.subtitle}>{tripData.overview.subtitle}</p>
          <div className={styles.quickInfo}>
            <span>{tripData.overview.dates}</span>
            <span>•</span>
            <span>{tripData.overview.duration}</span>
            <span>•</span>
            <span>{tripData.overview.flights} Flights</span>
            <span>•</span>
            <span>{tripData.overview.hotels} Hotels</span>
          </div>
        </div>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Logout
        </button>
      </header>

      <nav className={styles.nav}>
        <button
          className={activeSection === 'overview' ? styles.active : ''}
          onClick={() => setActiveSection('overview')}
        >
          Overview
        </button>
        <button
          className={activeSection === 'itinerary' ? styles.active : ''}
          onClick={() => setActiveSection('itinerary')}
        >
          Full Itinerary
        </button>
        <button
          className={activeSection === 'confirmations' ? styles.active : ''}
          onClick={() => setActiveSection('confirmations')}
        >
          Confirmations
        </button>
        <button
          className={activeSection === 'costs' ? styles.active : ''}
          onClick={() => setActiveSection('costs')}
        >
          Costs
        </button>
        <button
          className={activeSection === 'songkran' ? styles.active : ''}
          onClick={() => setActiveSection('songkran')}
        >
          Songkran Festival
        </button>
        <button
          className={activeSection === 'info' ? styles.active : ''}
          onClick={() => setActiveSection('info')}
        >
          Travel Info
        </button>
      </nav>

      <main className={styles.main}>
        {/* OVERVIEW SECTION */}
        {activeSection === 'overview' && (
          <section className={styles.section}>
            <h2>Trip Overview</h2>
            <div className={styles.overviewGrid}>
              <div className={styles.card}>
                <h3>📅 Duration</h3>
                <p>{tripData.overview.duration}</p>
                <small>{tripData.overview.dates}</small>
              </div>
              <div className={styles.card}>
                <h3>✈️ Flights</h3>
                <p>{tripData.overview.flights} Flights</p>
                <small>Booking: {tripData.overview.mainBooking}</small>
              </div>
              <div className={styles.card}>
                <h3>🏨 Hotels</h3>
                <p>{tripData.overview.hotels} Hotels</p>
                <small>4 cities</small>
              </div>
              <div className={styles.card}>
                <h3>💰 Total Cost</h3>
                <p>{tripData.overview.totalCost}</p>
                <small>All-inclusive</small>
              </div>
            </div>

            <div className={styles.section}>
              <h3>Route</h3>
              <div className={styles.route}>
                {tripData.overview.route.map((city, idx) => (
                  <div key={idx}>
                    <span className={styles.city}>{city}</span>
                    {idx < tripData.overview.route.length - 1 && <span className={styles.arrow}>→</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.notesSection}>
              <h3>⚠️ Important Notes</h3>
              {tripData.importantNotes.map((note, idx) => (
                <div key={idx} className={styles.noteItem}>
                  <strong>{note.icon} {note.title}</strong>
                  <p>{note.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FULL ITINERARY SECTION */}
        {activeSection === 'itinerary' && (
          <section className={styles.section}>
            <h2>Complete Day-by-Day Itinerary</h2>
            <div className={styles.itineraryList}>
              {tripData.itinerary.map((day, idx) => (
                <div key={idx} className={styles.dayCard}>
                  <div className={styles.dayHeader}>
                    <h3>Day {day.day}</h3>
                    <span className={styles.date}>{day.date}</span>
                  </div>

                  <div className={styles.dayContent}>
                    <h4 className={styles.location}>{day.location}</h4>

                    {day.flights && (
                      <div className={styles.flights}>
                        <h5>✈️ Flights</h5>
                        {day.flights.map((flight, fIdx) => (
                          <div key={fIdx} className={styles.flightDetail}>
                            <div>
                              <strong>{flight.time}</strong> - {flight.flight}
                            </div>
                            <div>
                              {flight.from} → {flight.to}
                            </div>
                            <div className={styles.small}>
                              Duration: {flight.duration}
                              {flight.seats && ` | Seats: ${flight.seats.join(', ')}`}
                              {flight.arrival && ` | Arrival: ${flight.arrival}`}
                            </div>
                            {flight.airline && <div className={styles.small}>Airline: {flight.airline}</div>}
                            {flight.baggage && <div className={styles.small}>Baggage: {flight.baggage}</div>}
                            {flight.meals && <div className={styles.small}>Meals: {flight.meals}</div>}
                            {flight.cost && <div className={styles.small}>Cost: {flight.cost}</div>}
                            <div className={styles.booking}>Booking: {flight.booking}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {day.hotel && (
                      <div className={styles.hotel}>
                        <h5>🏨 Hotel</h5>
                        <div>
                          <strong>{day.hotel.name}</strong>
                        </div>
                        <div className={styles.small}>{day.hotel.address}</div>
                        <div className={styles.small}>
                          {day.hotel.dates} • {day.hotel.room}
                        </div>
                        {day.hotel.cost && <div className={styles.small}>Cost: {day.hotel.cost}</div>}
                        <div className={styles.booking}>Confirmation: {day.hotel.confirmation}</div>
                        {day.hotel.notes && <div className={styles.note}>{day.hotel.notes}</div>}
                        {day.hotel.amenities && day.hotel.amenities.map((amenity, aIdx) => (
                          <div key={aIdx} className={styles.amenity}>✓ {amenity}</div>
                        ))}
                      </div>
                    )}

                    {day.activities && (
                      <div className={styles.activities}>
                        <h5>🎯 Activities</h5>
                        <ul>
                          {day.activities.map((activity, aIdx) => (
                            <li key={aIdx}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {day.festival && (
                      <div className={styles.festival}>
                        <h5>{day.festival}</h5>
                      </div>
                    )}

                    {day.notes && <div className={styles.note}>{day.notes}</div>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CONFIRMATIONS SECTION */}
        {activeSection === 'confirmations' && (
          <section className={styles.section}>
            <h2>All Confirmation Numbers</h2>
            <div className={styles.confirmationsGrid}>
              <div className={styles.confirmCard}>
                <h4>Etihad Airways (All International)</h4>
                <code>{tripData.confirmations.etihad}</code>
              </div>
              <div className={styles.confirmCard}>
                <h4>Shirin - Etihad</h4>
                <code>{tripData.confirmations.shirin}</code>
              </div>
              <div className={styles.confirmCard}>
                <h4>Zeel - Etihad</h4>
                <code>{tripData.confirmations.zeel}</code>
              </div>
              <div className={styles.confirmCard}>
                <h4>Thai Airways (BKK→CNX)</h4>
                <code>{tripData.confirmations.thaiBKKtoCNX}</code>
              </div>
              <div className={styles.confirmCard}>
                <h4>AirAsia (CNX→Phuket)</h4>
                <code>{tripData.confirmations.airAsiaCNXtoPhuket}</code>
              </div>
              <div className={styles.confirmCard}>
                <h4>Thai Airways (Phuket→BKK)</h4>
                <code>{tripData.confirmations.thaiPhuketToBKK}</code>
              </div>
              <div className={styles.confirmCard}>
                <h4>Grand Millennium Al Wahda</h4>
                <code>{tripData.confirmations.grandMillennium}</code>
              </div>
              <div className={styles.confirmCard}>
                <h4>Grande Centre Point Sukhumvit 55</h4>
                <code>{tripData.confirmations.grandeCentrePoint}</code>
              </div>
              <div className={styles.confirmCard}>
                <h4>Proud Phu Fah Maerim</h4>
                <code>{tripData.confirmations.proudPhuFah}</code>
              </div>
              <div className={styles.confirmCard}>
                <h4>Marina Gallery Resort</h4>
                <code>{tripData.confirmations.marinaGallery}</code>
              </div>
              <div className={styles.confirmCard}>
                <h4>The Park Nine Hotel</h4>
                <code>{tripData.confirmations.parkNine}</code>
              </div>
            </div>
          </section>
        )}

        {/* COSTS SECTION */}
        {activeSection === 'costs' && (
          <section className={styles.section}>
            <h2>Trip Costs Breakdown</h2>
            <div className={styles.costsList}>
              {Object.entries(tripData.costs).map(([key, value]) => {
                if (key === 'total') {
                  return (
                    <div key={key} className={styles.costTotal}>
                      <strong>TOTAL TRIP COST</strong>
                      <strong className={styles.totalAmount}>CA ${value}</strong>
                    </div>
                  );
                }
                return (
                  <div key={key} className={styles.costItem}>
                    <span>{value.description}</span>
                    <span className={styles.amount}>
                      CA ${value.amount.toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* SONGKRAN SECTION */}
        {activeSection === 'songkran' && (
          <section className={styles.section}>
            <h2>🎉 Songkran Festival (April 13-15)</h2>
            <div className={styles.card}>
              <p><strong>Location:</strong> {tripData.songkran.location}</p>
              <p><strong>Dates:</strong> {tripData.songkran.dates}</p>
              <p><strong>Description:</strong> {tripData.songkran.description}</p>
            </div>

            <div className={styles.songkranSection}>
              <h3>What to Bring</h3>
              <ul className={styles.checkList}>
                {tripData.songkran.whatToBring.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.songkranSection}>
              <h3>Best Areas for Celebrations</h3>
              {tripData.songkran.bestAreas.map((area, idx) => (
                <div key={idx} className={styles.areaCard}>
                  <h4>{area.area}</h4>
                  <p>{area.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TRAVEL INFO SECTION */}
        {activeSection === 'info' && (
          <section className={styles.section}>
            <h2>Travel Information</h2>

            <div className={styles.infoSection}>
              <h3>☀️ Weather by City</h3>
              <div className={styles.weatherGrid}>
                {tripData.weather.map((w, idx) => (
                  <div key={idx} className={styles.weatherCard}>
                    <h4>{w.city}</h4>
                    <div><strong>Temp:</strong> {w.temp}</div>
                    <div><strong>Humidity:</strong> {w.humidity}</div>
                    <div><strong>Rain:</strong> {w.rain}</div>
                    <div className={styles.tip}>💡 {w.tip}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.infoSection}>
              <h3>🏝️ Day Trips from Phuket</h3>
              {tripData.dayTrips.map((trip, idx) => (
                <div key={idx} className={styles.tripCard}>
                  <h4>{trip.name}</h4>
                  <p>{trip.description}</p>
                  <div className={styles.tripDetails}>
                    <span>⏱️ {trip.duration}</span>
                    <span>🚤 {trip.transport}</span>
                    <span>💰 {trip.cost}</span>
                  </div>
                  <div className={styles.tip}>💡 {trip.tip}</div>
                </div>
              ))}
            </div>

            <div className={styles.infoSection}>
              <h3>☕ Hidden Gems in Bangkok</h3>
              <div className={styles.gemsGrid}>
                {tripData.hiddenGems.map((gem, idx) => (
                  <div key={idx} className={styles.gemCard}>
                    <h4>{gem.icon} {gem.name}</h4>
                    <p className={styles.location}>{gem.location}</p>
                    <p>{gem.vibe}</p>
                    <p className={styles.specialty}>✨ {gem.specialty}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.infoSection}>
              <h3>🥗 Vegetarian & Vegan Options (for Shirin!)</h3>
              <div className={styles.veggieGrid}>
                {tripData.vegetarianGuide.map((place, idx) => (
                  <div key={idx} className={styles.veggieCard}>
                    <h4>{place.icon} {place.name}</h4>
                    <p className={styles.type}>{place.type}</p>
                    <p>✨ {place.specialty}</p>
                    <p className={styles.diet}>Diet: {place.diet}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.infoSection}>
              <h3>🗣️ Useful Thai Phrases</h3>
              <div className={styles.phrasesTable}>
                {tripData.thaiPhrases.map((phrase, idx) => (
                  <div key={idx} className={styles.phraseRow}>
                    <div className={styles.english}>{phrase.english}</div>
                    <div className={styles.thai}>{phrase.thai}</div>
                    <div className={styles.pronunciation}>{phrase.pronunciation}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.infoSection}>
              <h3>🚨 Emergency Contacts</h3>
              <div className={styles.emergencyCard}>
                <h4>{tripData.emergencyContacts.embassy.name}</h4>
                <p><strong>Address:</strong> {tripData.emergencyContacts.embassy.address}</p>
                <p><strong>Local:</strong> {tripData.emergencyContacts.embassy.phone}</p>
                <p><strong>Emergency (Canada):</strong> {tripData.emergencyContacts.embassy.emergency}</p>
                <p><strong>Hours:</strong> {tripData.emergencyContacts.embassy.hours}</p>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className={styles.footer}>
        <p>Thailand Adventure 2026 - Shirin & Zeel</p>
        <p>{tripData.overview.dates}</p>
      </footer>
    </div>
  );
}
