import CategorySection from "../ui/demo/CategorySection";
import "./Demo.styles.css";
const { BestPracticesData, PerformanceData, UsabilityData } = require('../lib/data');
export default function demo() {
    console.log(BestPracticesData);
    
    return (
        <section className="demo">
            <h1>Demo</h1>
            <div className="demo__container">
                <CategorySection title="Best Practices" data={BestPracticesData} />
                <CategorySection title="Performance" data={PerformanceData} />
                <CategorySection title="Usability" data={UsabilityData} />
            </div>
        </section>
    );
}	