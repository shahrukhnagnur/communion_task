import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from './images/10007.jpg';
import img2 from './images/10008.jpg';
import img3 from './images/10010.jpg';

const Event = () => {
  const [category, setCategory] = useState("categories");
  const [events, setEvents] = useState([
    { id: 1, title: "Spiritual Gathering", category: "Religious", date: "2025-04-10", time: "10:00 AM", image: img1 },
    { id: 2, title: "Charity Fundraiser", category: "Charity", date: "2025-04-15", time: "2:00 PM", image: img3 },
    { id: 3, title: "Community Meetup", category: "Social", date: "2025-04-18", time: "5:30 PM", image: img2 },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    category: "Religious",
    date: "",
    time: "",
    image: null,
  });

  const handleChange = (e) => setCategory(e.target.value);

  const handleInputChange = (e) => setNewEvent({ ...newEvent, [e.target.name]: e.target.value });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewEvent({ ...newEvent, image: URL.createObjectURL(file) });
    }
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time || !newEvent.image) {
      alert("Please fill all fields!");
      return;
    }

    setEvents([...events, { id: events.length + 1, ...newEvent }]);
    setNewEvent({ title: "", category: "Religious", date: "", time: "", image: null });
    document.getElementById("closeModal").click();
  };

  const filteredEvents = category === "categories" ? events : events.filter((event) => event.category === category);

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold text-dark">Events</h1>
        <p className="text-muted">Discover and join events from our community.</p>
      </div>

      {/* Filter Dropdown */}
      <div className="row align-items-center mb-4">
        <div className="col-md-6 d-flex align-items-center">
          <p className="fw-semibold me-3 mb-0">Filter:</p>
          <select className="form-select w-auto px-4 py-2 shadow-sm border rounded" value={category} onChange={handleChange}>
            <option value="categories">All Categories</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
        </div>
        <div className="col-md-6 text-end">
          <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addEventModal">Add Event</button>
        </div>
      </div>

      {/* Event Cards */}
      <div className="row">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 event-card">
                <img src={event.image} alt={event.title} className="card-img-top event-img" />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{event.title}</h5>
                  <p className="card-text text-muted mb-1">📅 {event.date} | ⏰ {event.time}</p>
                  <button className="btn btn-primary mt-2">Event Details</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No events found for this category.</p>
        )}
      </div>

      {/* Add Event Modal */}
      <div className="modal fade" id="addEventModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Event</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input type="text" name="title" className="form-control mb-2" placeholder="Event Title" value={newEvent.title} onChange={handleInputChange} />
              <select name="category" className="form-select mb-2" value={newEvent.category} onChange={handleInputChange}>
                <option value="Religious">Religious</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
              </select>
              <input type="date" name="date" className="form-control mb-2" value={newEvent.date} onChange={handleInputChange} />
              <input type="time" name="time" className="form-control mb-2" value={newEvent.time} onChange={handleInputChange} />
              <input type="file" accept="image/*" className="form-control mb-2" onChange={handleImageUpload} />
              {newEvent.image && <img src={newEvent.image} alt="Preview" className="img-preview mt-2" />}
            </div>
            <div className="modal-footer">
              <button id="closeModal" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleAddEvent}>Add Event</button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .event-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 10px;
            overflow: hidden;
          }
          .event-card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
          .event-img {
            height: 200px;
            object-fit: cover;
          }
          .img-preview {
            width: 100%;
            max-height: 200px;
            object-fit: cover;
            border-radius: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default Event;
