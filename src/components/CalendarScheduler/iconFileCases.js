export function iconFileCases(data, dateDifference) {
    let displayIcon = true;
    let expression = dateDifference;
    if(dateDifference > 7)
    expression = 'last';
    const { hideFromWeekView } = data;
    switch(expression) {
        case 7:
            if(hideFromWeekView) {
                displayIcon = false;
            } else {
                displayIcon = true;
            }    
          break;
        case 1:
          displayIcon = false;
          break;
        case 'last':
            displayIcon = false;
            break;
        default:
            break;
          // code block
    }
    return displayIcon;
}

export function iconFileCasesForPopOver(data, dateDifference) {
    let displayIcon = true;
    let expression = dateDifference;
    if(dateDifference > 7)
    expression = 'last';
    const { displayPopOverIconInWeek } = data;
    switch(expression) {
        case 7:
            if(displayPopOverIconInWeek) {
                displayIcon = true;
            } else {
                displayIcon = false;
            }    
          break;
        case 1:
          displayIcon = true;
          break;
        case 'last':
            displayIcon = true;
            break;
        default:
            break;
          // code block
    }
    return displayIcon;
}