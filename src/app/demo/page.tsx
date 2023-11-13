import Accordion from "../ui/demo/Accordion";
import "./Demo.styles.css";

const data = {
    "Performance": [
        {
            "id": "tab4",
            "title": "Google Page Speed score of 90+",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!"
        },
        {
            "id": "tab5",
            "title": "Optimize HTTP headers",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!"
        },
        {
            "id": "tab6",
            "title": "Optimize Images",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!"
        }
    ],
    "Best Practices": [
        {
            "id": "tab1",
            "title": "Fix Broken Links",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!"
        },
        {
            "id": "tab2",
            "title": "Spelling and grammar",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!"
        },
        {
            "id": "tab3",
            "title": "Check website on all browsers",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!"
        }
    ],
    "Usability": [
        {
            "id": "tab7",
            "title": "HTML5/CSS3 compatibility check",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!"
        },
        {
            "id": "tab8",
            "title": "Custom 404 page",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!"
        },
        {
            "id": "tab9",
            "title": "Favicon",
            "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!"
        }
    ]
}



export default function demo() {
    return (
        <section className="demo">
            <h1>Demo</h1>
            <div className="demo__container">
                <div className="dialog">
                    <h3 className="title">Best Practices</h3>
                    {data["Best Practices"].map((item) => (
                        <Accordion
                            key={item.id}
                            title={item.title}
                            content={item.content}
                            id={item.id}
                        />
                    ))}
                </div>
                <div className="dialog">
                    <h3 className="title">Performance</h3>
                    {data["Performance"].map((item) => (
                        <Accordion
                            key={item.id}
                            title={item.title}
                            content={item.content}
                            id={item.id}
                        />
                    ))}
                </div>
                <div className="dialog">
                    <h3 className="title">Usability</h3>
                    {data["Usability"].map((item) => (
                        <Accordion
                            key={item.id}
                            title={item.title}
                            content={item.content}
                            id={item.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}	