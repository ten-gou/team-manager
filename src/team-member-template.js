module.exports = (memberInputData) => {
    console.log(memberInputData)
    const {
        name,
        employeeID,
        email,
        officenumber,
        employeeType
    } = memberInputData
    
    return `
    ${name}
    ${employeeType}

    ${employeeID}

    ${email}

    ${officenumber}
    `;
};