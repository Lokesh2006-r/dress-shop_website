
import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function submit(e) {
    e.preventDefault()
    // placeholder: integrate with backend or email service
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="my-5">
      <h3>Contact Us</h3>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={submit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
            </div>
            <button className="btn btn-primary">Send Message</button>
            {sent && <div className="mt-2 text-success">Message sent (demo).</div>}
          </form>
        </div>
        <div className="col-md-6">
          <div className="p-4 bg-light rounded shadow-sm">
            <h5>Store Info</h5>
            <p className="mb-1">Email: support@trendhive.com</p>
            <p className="mb-1">Phone: +91 8010567890</p>
            <p className="mb-0">Address: Tamilnadu,India</p>
          </div>
        </div>
      </div>
    </section>
  )
}

