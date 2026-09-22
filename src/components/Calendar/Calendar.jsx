import React, { useState, useEffect } from 'react'
import './Calendar.css'

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDateKey, setSelectedDateKey] = useState(null)
  
  // Persistent storage for events keyed by "YYYY-MM-DD"
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('school_calendar_events')
    return saved ? JSON.parse(saved) : {}
  })

  // Modal / Form state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [eventTitle, setEventTitle] = useState('')
  const [eventCategory, setEventCategory] = useState('Academic')

  // Save to localStorage when events change
  useEffect(() => {
    localStorage.setItem('school_calendar_events', JSON.stringify(events))
  }, [events])

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  // Navigation handlers
  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1))
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1))
  const handleToday = () => setCurrentDate(new Date())

  // Calendar matrix calculation
  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()

  // Build grid days
  const calendarDays = []

  // 1. Previous month trailing days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const pDay = daysInPrevMonth - i
    const pDate = new Date(year, month - 1, pDay)
    const key = pDate.toISOString().split('T')[0]
    calendarDays.push({ day: pDay, isCurrentMonth: false, dateKey: key })
  }

  // 2. Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const monthFormatted = String(month + 1).padStart(2, '0')
    const dayFormatted = String(day).padStart(2, '0')
    const key = `${year}-${monthFormatted}-${dayFormatted}`
    calendarDays.push({ day, isCurrentMonth: true, dateKey: key })
  }

  // 3. Next month leading days to complete 35 or 42 grid cells
  const remainingCells = (42 - calendarDays.length) % 7
  for (let i = 1; i <= remainingCells; i++) {
    const nDate = new Date(year, month + 1, i)
    const key = nDate.toISOString().split('T')[0]
    calendarDays.push({ day: i, isCurrentMonth: false, dateKey: key })
  }

  // Event handlers
  const handleCellClick = (dateKey) => {
    setSelectedDateKey(dateKey)
    setEventTitle('')
    setEventCategory('Academic')
    setIsModalOpen(true)
  }

  const handleAddEvent = (e) => {
    e.preventDefault()
    if (!eventTitle.trim() || !selectedDateKey) return

    const newEvent = {
      id: Date.now(),
      title: eventTitle.trim(),
      category: eventCategory,
    }

    setEvents((prev) => {
      const existing = prev[selectedDateKey] || []
      return {
        ...prev,
        [selectedDateKey]: [...existing, newEvent],
      }
    })

    setIsModalOpen(false)
  }

  const handleDeleteEvent = (dateKey, eventId, e) => {
    e.stopPropagation()
    setEvents((prev) => {
      const updatedList = (prev[dateKey] || []).filter((item) => item.id !== eventId)
      if (updatedList.length === 0) {
        const copy = { ...prev }
        delete copy[dateKey]
        return copy
      }
      return {
        ...prev,
        [dateKey]: updatedList,
      }
    })
  }

  const todayKey = new Date().toISOString().split('T')[0]

  return (
    <section className="page-container">
      <div className="page-header">
        <p className="page-kicker">Romana Elementary School</p>
        <h1>School Calendar</h1>
        <p>Keep track of school activities, assessment dates, and important events.</p>
      </div>

      <div className="calendar-card">
        {/* Calendar Navigation Header */}
        <div className="calendar-header">
          <h2>{MONTH_NAMES[month]} {year}</h2>
          <div className="calendar-controls">
            <button className="btn-secondary" onClick={handleToday}>Today</button>
            <button className="btn-icon" onClick={handlePrevMonth}>&lt;</button>
            <button className="btn-icon" onClick={handleNextMonth}>&gt;</button>
          </div>
        </div>

        {/* Days of Week Header */}
        <div className="calendar-grid-header">
          {DAYS_OF_WEEK.map((d) => (
            <div key={d} className="day-name">{d}</div>
          ))}
        </div>

        {/* Calendar Days Grid */}
        <div className="calendar-grid">
          {calendarDays.map((cell, index) => {
            const dayEvents = events[cell.dateKey] || []
            const isToday = cell.dateKey === todayKey

            return (
              <div
                key={index}
                className={`calendar-cell ${!cell.isCurrentMonth ? 'other-month' : ''} ${isToday ? 'today' : ''}`}
                onClick={() => handleCellClick(cell.dateKey)}
              >
                <div className="cell-number">{cell.day}</div>
                <div className="events-list">
                  {dayEvents.map((ev) => (
                    <div key={ev.id} className={`event-badge cat-${ev.category.toLowerCase()}`}>
                      <span className="event-title">{ev.title}</span>
                      <button
                        className="btn-delete-event"
                        onClick={(e) => handleDeleteEvent(cell.dateKey, ev.id, e)}
                        title="Delete event"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Add Event Modal */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Add Event for {selectedDateKey}</h3>
            <form onSubmit={handleAddEvent}>
              <div className="form-group">
                <label>Event Title</label>
                <input
                  type="text"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  placeholder="e.g., Quarterly Examination, PTA Meeting"
                  required
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select
                  value={eventCategory}
                  onChange={(e) => setEventCategory(e.target.value)}
                >
                  <option value="Academic">Academic</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Activity">Activity / Holiday</option>
                </select>
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Calendar