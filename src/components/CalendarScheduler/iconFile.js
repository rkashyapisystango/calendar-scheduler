import React from 'react';
function IconFile(props){
    const { eventIconJson, eventIconClick, info } = props;
    if (eventIconJson && !eventIconJson.hideAll) {
        return (<div className="fc-icon-wrap">
            {
            eventIconJson.firstIcon &&
            eventIconJson.firstIcon.display &&
            <i
                className={eventIconJson.firstIcon.icon ? 
                eventIconJson.firstIcon.icon : "fas fa-edit"}
                onClick={() => eventIconClick('1', info)}
            /> 
            }
            {
            eventIconJson.secondIcon &&
            eventIconJson.secondIcon.display &&
                <i
                className={eventIconJson.secondIcon.icon ? 
                    eventIconJson.secondIcon.icon : "fa fa-plus"}
                onClick={() => eventIconClick('2', info)}
                />
            }
        </div>);
    }
    return null;
}

export default IconFile;