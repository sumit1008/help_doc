import { Resend } from 'resend';

import {NextResponse} from 'next/server'
import EmailTemplate from '@/emails';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req){

    const response=await req.json()

    const data=await resend.emails.send({
        // domail verification needed
        // from: 'Doctor-Appointment@mnnit.ac.in',
        from:'Acme <onboarding@resend.dev>',
        to: [response.data.Email],
        subject: 'Booking appointment confirmation',
        react: EmailTemplate({response}) ,
    });

    try{
        return NextResponse.json({data })
    }
    catch(error){
        return NextResponse.json({error})
    }
}