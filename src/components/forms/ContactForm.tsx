'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const initialState = { fullName: '', email: '', enquiryType: 'General', message: '' };

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<string>('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/api/contact', {
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
      <label className="block text-sm">
        Full name
        <input
          required
          value={form.fullName}
          onChange={(event) => setForm({ ...form, fullName: event.target.value })}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </label>
      <label className="block text-sm">
        Email address
        <input
          required
          type="email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </label>
      <label className="block text-sm">
        Enquiry type
        <select
          value={form.enquiryType}
          onChange={(event) => setForm({ ...form, enquiryType: event.target.value })}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        >
          <option>General</option>
          <option>Property</option>
          <option>Recruitment</option>
          <option>Fashion</option>
        </select>
      </label>
      <label className="block text-sm">
        Message
        <textarea
          required
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          rows={5}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </label>
      <Button type="submit">Send enquiry</Button>
      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </form>
  );
}
