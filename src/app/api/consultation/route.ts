import { NextResponse } from 'next/server';
import { submitConsultationForm } from '@/lib/api/services';

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    fullName?: string;
    email?: string;
    phone?: string;
    serviceInterest?: string;
    preferredDate?: string;
    notes?: string;
  };

  if (!payload.fullName || !payload.email || !payload.phone) {
    return NextResponse.json({ message: 'Full name, email and phone are required.' }, { status: 400 });
  }

  const result = await submitConsultationForm({
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    serviceInterest: payload.serviceInterest ?? 'Property Services',
    preferredDate: payload.preferredDate ?? '',
    notes: payload.notes ?? ''
  });

  return NextResponse.json(result);
}
