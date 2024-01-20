import React from 'react';
import "./Dashboard.styles.css";
import NewChecklist from '../ui/NewChecklist/NewChecklist';
import supabase from "@/app/lib/supabase";
import Link from 'next/link';
import { getServerSession } from 'next-auth';

export default async function Dashboard() {
    const session = await getServerSession();
    const checklists = await fetchData();
    async function fetchData() {
        const { data, error } = await supabase.from('checklists').select('*').eq('user_id', session?.user?.email);
        if (error) {
            console.error("Error fetching data from Supabase:", error);
            throw error;
        }
        return data;
    }
    return (
        <section className="dashboard">
            <h1>Create your Checklist</h1>
            <NewChecklist />
            <div className='dashboard__checklists'>
                <h2>Your Checklists</h2>
                {checklists === null || checklists.length === 0 ? (
                    <p>No checklists found</p>
                ) : (
                    checklists.map((checklist) => (
                        <div key={checklist.id_checklist} className="dashboard__checklist">
                            <Link
                                href={`/checklists/${checklist.id_checklist}`}
                            >
                                {checklist.name}
                            </Link>
                        </div>
                    ))

                )}
            </div>
        </section>
    );
}
