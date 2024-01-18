import React from 'react';
import "./Dashboard.styles.css";
import NewChecklist from '../ui/NewChecklist/NewChecklist';
import supabase from "@/app/lib/supabase";
import Link from 'next/link';
import { getServerSession } from 'next-auth';

export default async function Dashboard() {
    const session = await getServerSession({ required: true, callbacks: {} })
    const { data: nameChecklists, error } = await supabase.from('checklists').select('namechecklist').eq('user_id', session?.user?.email);
    
    return (
        <section className="dashboard">
                <h1>Create your Checklist</h1>
                <NewChecklist />
                <div className='dashboard__checklists'>
                    <h2>Your Checklists</h2>
                    <ul>
                        {nameChecklists?.map((checklist: any) => (
                            <li key={checklist.namechecklist}><Link href={`/checklists/${checklist.namechecklist}`}>{checklist.namechecklist}</Link></li>
                        ))}
                    </ul>
                </div>
        </section>
    );
}
