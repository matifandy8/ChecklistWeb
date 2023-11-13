export default function Accordion({title, content, id}: {title: string, content: string, id: string}) {
    return (
        <div className="accordion">
            <input type="checkbox" id={id} className="accordion-tab" />
            <label className="accordion-label nb-label" htmlFor={id}>
                {title}
                <input type="checkbox" id="" className="nb-checkbox" name="" value="" />
            </label>
            <div className="accordion-content">
                {content}
            </div>
        </div>
    );
}