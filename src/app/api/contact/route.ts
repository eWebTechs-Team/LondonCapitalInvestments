import { NextResponse } from 'next/server';
import { submitContactForm } from '@/lib/api/services';

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    fullName?: string;
    email?: string;
    enquiryType?: string;
    message?: string;
  };

  if (!payload.fullName || !payload.email || !payload.message) {
    return NextResponse.json({ message: 'Please complete all required fields.' }, { status: 400 });
  }

  const result = await submitContactForm({
    fullName: payload.fullName,
    email: payload.email,
    enquiryType: payload.enquiryType ?? 'General',
    message: payload.message
  });

  return NextResponse.json(result);
}
