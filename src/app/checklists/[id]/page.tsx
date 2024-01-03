

export default function page({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>Checklist {params.id}</h1>
            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ul>
            <a href={`/checklists/edit/${params.id}`}>Edit</a>
        </div>
    )
}