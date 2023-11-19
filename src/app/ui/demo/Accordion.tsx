import Link from "next/link";

export default function Accordion({title, links, id}: {title: string, id: string, links: {title: string, url: string}[]}) {
    return (
        <div className="accordion">
            <input type="checkbox" id={id} className="accordion-tab" />
            <label className="accordion-label nb-label" htmlFor={id}>
                {title}
                <input type="checkbox" id="" className="nb-checkbox" name="" value="" />
            </label>
            <div className="accordion-content">
                <ul>
                    {links.map((link) => (
                        <li key={link.title}>
                            <Link href={link.url} rel="noopener noreferrer" target="_blank">{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}