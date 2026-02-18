import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { logout } from '../lib/auth';
import { tripData } from '../lib/tripData';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

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

  // Calculate countdown
  const departureDate = new Date('2026-04-03').getTime();
  const today = new Date().getTime();
  const daysUntil = Math.ceil((departureDate - today) / (1000 * 60 * 60 * 24));

  if (!authenticated) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>🇹🇭 Thailand Adventure</h1>
          <p className={styles.subtitle}>{tripData.overview.subtitle}</p>
        </div>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          ↪ Logout
        </button>
      </header>

      {/* COUNTDOWN BANNER */}
      <div className={styles.countdownBanner}>
        <div className={styles.countdownContent}>
          <div className={styles.countdownValue}>{daysUntil}</div>
          <div className={styles.countdownLabel}>Days until departure</div>
        </div>
        <div className={styles.countdownDates}>{tripData.overview.dates}</div>
      </div>

      {/* TAB NAVIGATION */}
      <nav className={styles.tabNav}>
        <button
          className={activeTab === 'overview' ? styles.tabActive : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={activeTab === 'itinerary' ? styles.tabActive : ''}
          onClick={() => setActiveTab('itinerary')}
        >
          Itinerary
        </button>
        <button
          className={activeTab === 'confirmations' ? styles.tabActive : ''}
          onClick={() => setActiveTab('confirmations')}
        >
          Confirmations
        </button>
        <button
          className={activeTab === 'budget' ? styles.tabActive : ''}
          onClick={() => setActiveTab('budget')}
        >
          Budget
        </button>
      </nav>

      <main className={styles.main}>
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <section className={styles.tabSection}>
            <div className={styles.summaryCards}>
              {/* BUDGET CARD */}
              <div className={styles.budgetCard}>
                <div className={styles.budgetLabel}>Total Trip Cost</div>
                <div className={styles.budgetAmount}>CA $5,772</div>
                <div className={styles.budgetBreakdown}>
                  <span>7 Flights • 5 Hotels • 14 Days</span>
                </div>
              </div>
              
              {/* TRIP INFO CARD */}
              <div className={styles.infoCard}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Duration</span>
                  <span className={styles.infoValue}>14 Days</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Flights</span>
                  <span className={styles.infoValue}>7 Segments</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Hotels</span>
                  <span className={styles.infoValue}>5 Cities</span>
                </div>
              </div>
            </div>

            <h2 className={styles.sectionTitle}>Your Route</h2>
            <div className={styles.routeContainer}>
              <div className={styles.routePath}>
                {tripData.overview.route.map((city, idx) => (
                  <div key={idx} className={styles.routeCity}>
                    <div className={styles.cityDot}></div>
                    <div className={styles.cityName}>{city}</div>
                    {idx < tripData.overview.route.length - 1 && <div className={styles.routeLine}></div>}
                  </div>
                ))}
              </div>
            </div>

            <h2 className={styles.sectionTitle}>Flight Highlights</h2>
            <div className={styles.flightsOverview}>
              {tripData.itinerary.filter(day => day.flights).map((day, idx) => (
                <div key={idx} className={styles.boardingPass}>
                  <div className={styles.boardingPassTop}>
                    <div>
                      <div className={styles.from}>{day.flights[0].from.split('(')[0]}</div>
                      <div className={styles.code}>{day.flights[0].from.match(/\(([^)]+)\)/)[1]}</div>
                    </div>
                    <div className={styles.flightNum}>{day.flights[0].flight}</div>
                    <div className={styles.alignRight}>
                      <div className={styles.to}>{day.flights[0].to.split('(')[0]}</div>
                      <div className={styles.code}>{day.flights[0].to.match(/\(([^)]+)\)/)[1]}</div>
                    </div>
                  </div>
                  <div className={styles.boardingPassDivider}></div>
                  <div className={styles.boardingPassBottom}>
                    <div>
                      <div className={styles.label}>Time</div>
                      <div className={styles.value}>{day.flights[0].time}</div>
                    </div>
                    <div>
                      <div className={styles.label}>Date</div>
                      <div className={styles.value}>{day.date}</div>
                    </div>
                    <div>
                      <div className={styles.label}>Duration</div>
                      <div className={styles.value}>{day.flights[0].duration}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className={styles.sectionTitle}>Hotel Stays</h2>
            <div className={styles.hotelsGrid}>
              {tripData.itinerary.filter(day => day.hotel).map((day, idx) => (
                <div key={idx} className={styles.hotelCard}>
                  <div className={styles.hotelName}>{day.hotel.name}</div>
                  <div className={styles.hotelLocation}>{day.hotel.address}</div>
                  <div className={styles.hotelDates}>
                    <span>📅 {day.hotel.dates}</span>
                  </div>
                  <div className={styles.hotelConfirm}>
                    <span className={styles.confirmLabel}>Confirmation:</span>
                    <code className={styles.confirmCode}>{day.hotel.confirmation}</code>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ITINERARY TAB */}
        {activeTab === 'itinerary' && (
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

        {/* CONFIRMATIONS TAB */}
        {activeTab === 'confirmations' && (
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

        {/* BUDGET TAB */}
        {activeTab === 'budget' && (
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
      </main>

      <footer className={styles.footer}>
        <p>Thailand Adventure 2026 - Shirin & Zeel</p>
        <p>{tripData.overview.dates}</p>
      </footer>
    </div>
  );
}
