import React, { useState } from 'react';

const ChecklistDisplay = ({ checklistName }: { checklistName: string }) => {

    return (
        <div>
            <h2>{checklistName}</h2>
            <ul>
                {/* // map the tasks here like next example on the dashboard */}
                {/* <Suspense fallback={<Loading/>}>
                {websiteData?.map((item: any) => (
                    <CategorySection
                        key={item.id}
                        title={item.category}
                        data={item.data}
                        onCheckboxChange={handleCheckboxChange}
                        checkedItems={checkedItems}
                    />
                ))}
            </Suspense> */}
            </ul>

        </div>
    );
};

export default ChecklistDisplay;
