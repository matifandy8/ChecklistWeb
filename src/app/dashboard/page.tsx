import React from 'react';
import "./Dashboard.styles.css";
import NewChecklist from '../ui/NewChecklist/NewChecklist';
import supabase from "@/app/lib/supabase";
import Link from 'next/link';
import { getServerSession } from 'next-auth';

export default async function Dashboard() {
    const session = await getServerSession({ required: true, callbacks: {} })
    const { data: name, error } = await supabase.from('checklists').select('name').eq('user_id', session?.user?.email);
    console.log(name);
    return (
        <section className="dashboard">
            <h1>Create your Checklist</h1>
            <NewChecklist />
            <div className='dashboard__checklists'>
                <h2>Your Checklists</h2>
                {name === null || name.length === 0 ? (
                    <p>No checklists found</p>
                ) : (
                    name.map((checklist) => (
                        <Link
                            key={checklist.name}
                            href={`/checklists/${checklist.name}`}
                        >
                            {checklist.name}
                        </Link>
                    ))

                )}
            </div>
        </section>
    );
}
