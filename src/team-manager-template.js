module.exports = (TMInputData) => {
    const {
        name,
        employeeID,
        email,
        officenumber
    } = TMInputData
    
    return `
    ${name}

    ${employeeID}

    ${email}

    ${officenumber}
    `;
};