'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  serviceInterest: 'Property Services',
  preferredDate: '',
  notes: ''
};

export function ConsultationForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Submitting request...');

    const response = await fetch('/api/consultation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = (await response.json()) as { message: string };
    setStatus(data.message);
    if (response.ok) {
      setForm(initialState);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-elegant">
      <label className="block text-sm">Full name
        <input required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" value={form.fullName} onChange={(event) => setForm({ ...form, fullName: event.target.value })} />
      </label>
      <label className="block text-sm">Email
        <input required type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
      </label>
      <label className="block text-sm">Phone
        <input required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
      </label>
      <label className="block text-sm">Service interest
        <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" value={form.serviceInterest} onChange={(event) => setForm({ ...form, serviceInterest: event.target.value })}>
          <option>Property Services</option>
          <option>Recruitment Services</option>
          <option>Fashion Services</option>
        </select>
      </label>
      <label className="block text-sm">Preferred date
        <input type="date" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" value={form.preferredDate} onChange={(event) => setForm({ ...form, preferredDate: event.target.value })} />
      </label>
      <label className="block text-sm">Additional notes
        <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} />
      </label>
      <Button type="submit">Request consultation</Button>
      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </form>
  );
}
