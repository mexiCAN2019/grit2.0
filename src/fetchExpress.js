const Express = {};
const baseUrl = 'http://localhost:5000';

// Express.getSomething = async() => {
    // this is how you do async await with arrow notation}

Express.getYears = () => {
    const url = `${baseUrl}/years`
    return fetch(url).then(response => {
        if(!response.ok) {
            return [];
        } 
        return response.json()
    });
};

Express.createYear = year => {
    console.log(year);
    const url = `${baseUrl}/years`;
    const fetchOptions = {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({year: year})
    };
    return fetch(url, fetchOptions).then(response => {
        if(!response.ok) {
            return 400;
        }
        return response.json();
    }).then(jsonResponse => {
        return jsonResponse.year;
    });
};

Express.deleteYear = year => {
    const url = `${baseUrl}/years?year=${year}`;
    const fetchOptions = {
        method: 'DELETE'
    };
    return fetch(url,fetchOptions).then(response => {
        if(!response.ok){
            alert('Cannot Delete Year While Months Are Inside');
            return 'error 400';
        }
        return;
    });
};

//MONTH SEGMENT
Express.getMonths = year => {
    const url = `${baseUrl}/years/${year}`;
    return fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress error');
    }, networkError => {
        console.log(networkError.message);
    }).then(jsonResponse => {
        console.log(jsonResponse.months)
        return jsonResponse.months;
    }).catch(error => {
        console.log(error);
    })
};

Express.createMonth = (year, month) => {
    const url = `${baseUrl}/years/${year}`;
    const fetchOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({month: month})
    };
    console.log(month);
    fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress error');
        return;
    }, networkError => {
        console.log(networkError.message);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.deleteMonth = (year, id) => {
    const url = `${baseUrl}/years/${year}`;
    const fetchOptions = {method: "DELETE", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({monthID: id})};
    console.log(id);
    return fetch(url, fetchOptions).then(response => {
        if(response.ok){
            alert('Successfully Deleted');
            return;
        }
        alert('Are you Sure you want to delete everything for this year?')
        //add confirm() to frontend and delete this alert.
    })
};

//WEEK SEGMENT

Express.getWeeks = (year, monthID) => {
    const url = `${baseUrl}/years/${year}/month?monthID=${monthID}`;
    return fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress Error');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
        return jsonResponse.weeks;
    }).catch(error => console.log(error))
};

Express.createWeek = (year, week) => {
    const url = `${baseUrl}/years/${year}/month`; //?yearFK=${year}&week=${date}&monthId=${monthId}
    const fetchOptions = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({week: week}) //readjust frontend to give one object (week) with required info
    };
    return fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return true;
        }
        console.log('fetchExpress Error');
    }, networkError => console.log(networkError.message))
    .catch(error => console.log(error))
};

Express.deleteWeek = (year, weekID) => {
    const url = `${baseUrl}/years/${year}/month`;
    const fetchOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({weekID: weekID})
    }
    return fetch(url, fetchOptions).then(response => {
        if(response.ok){
            alert('Succesfully Deleted');
            return;
        }
        return 'error 400'; //decide how you want deletion flow. At what point does user confirm deletion?
    }, networkError => console.log(networkError.message));
};

//TIMELOGGER SEGMENT
Express.getTables = (year, weekID) => {
    const url = `${baseUrl}/years/${year}/month/table?weekID=${weekID}`;
    return fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress Error');
        return;
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
        return jsonResponse.tables;
    }).catch(error => console.log(error));
};

Express.deleteTable = (year, id) => {
    const url = `${baseUrl}/years/${year}/month/table?id=${id}`;
    const fetchOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    };
    fetch(url, fetchOptions).then(response => {
        if(response.ok){
            alert('Successfully Deleted');
            return;
        }
        console.log('fetchExpress Error');
        return;
    }, networkError => console.log(networkError.message));
};

Express.createTable = (year, newTable) => {
    const url = `${baseUrl}/years/${year}/month/table`;
    const fetchOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({table: newTable})
    };
    return fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return true;
        }
        console.log('fetchExpress Error');
    }, networkError => console.log(networkError.message))
    .catch(error => console.log(error));
};

Express.updateTable = (year, updatedTable) => {
    const url = `${baseUrl}/years/${year}/month/table`;
    const fetchOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({table: updatedTable})
    };
    return fetch(url, fetchOptions).then(response => {
        if(response.ok){
            alert('Time Successfully Updated');
            return;
        }
        alert('Error: Total Goal Hours must contain value, Name of skill cannot be left blank');
        return;
    }).catch(error => console.log(error));
};

//CHECKBOX SECTION

Express.getCheckboxes = (year, weekID) => {
    const url = `${baseUrl}/years/${year}/month/checkbox?weekID=${weekID}`;
    return fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed');
        return;
    }).then(jsonResponse => {
        return jsonResponse.checkboxes;
    }).catch(error => console.log(error));
};

Express.createCheckbox = (year, newCheckbox) => {
    const url = `${baseUrl}/years/${year}/month/checkbox`;
    const fetchOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({checkbox: newCheckbox})
    };
    return fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return true;
        }
        console.log('fetchExpress failed');
    }).catch(error => console.log(error));
};

Express.updateCheckbox = (year, updatedCheckbox) => {
    const url = `${baseUrl}/year/${year}/month/checkbox`;
    const fetchOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({checkbox: updatedCheckbox})
    };
    return fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed')
    }).then(jsonResponse => {
        return jsonResponse.checkbox;
    }).catch(error => console.log(error));
};

Express.deleteCheckbox = (year, id) => {
    const url = `${baseUrl}/years/${year}/month/checkbox?id=${id}`;
    return fetch(url, {method: 'DELETE', headers: {'Content-Type': 'application/json'}}).then(response => {
        if(response.ok){
            alert('Successfully Deleted')
        }
    }).catch(error => console.log(error));
};

//Textboxes
Express.getTextboxes = (year, weekID) => {
    const url = `${baseUrl}/years/${year}/month/textboxes?weekID=${weekID}`;
    return fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed', response);
    }).then(jsonResponse => {
        return jsonResponse.textboxes;
    }).catch(error => console.log(error));
};

Express.createTextbox = (year, newTextbox) => {
    const url = `${baseUrl}/years/${year}/month/textbox`;
    const fetchOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({textbox: newTextbox})
    };
    return fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return true;
        }
        console.log('fetchExpress failed', response);
    }).catch(error => console.log(error));
};

Express.updateTextbox = (year, updatedTextbox) => {
    const url = `${baseUrl}/years/${year}/month/textbox`;
    const fetchOptions = {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({textbox: updatedTextbox})
    };
    return fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed', response);
    }).catch(error => console.log(error));
};

Express.deleteTextbox = (year, id) => {
    const url = `${baseUrl}/years/${year}/month/textbox?id=${id}`;
    const fetchOptions = {method: 'DELETE', headers: {'Content-Type': 'application/json'}};
    return fetch(url, fetchOptions).then(response => {
        if(response.ok){
            alert('Successfully Deleted');
        }
    }).catch(error => console.log(error));
};

//MONTH REVIEW SECTION
 
Express.getTableSkills = (year, monthId) => {
    const url = `${baseUrl}/years/${year}/month/monthReview/table/${monthId}`;
    return fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed', response);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.getCheckboxSkills = (year, monthId) => {
    const url = `${baseUrl}/years/${year}/month/monthReview/checkbox/${monthId}`;
    return fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed', response);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.createMonthReviewSubjective = (year, newTextbox) => {
    const url = `${baseUrl}/years/${year}/month/monthReview/subjective`;
    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify({textbox: newTextbox})
    };
    return fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed', response);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.getMonthReviewSubjective = (year, monthId) => {
    const url = `${baseUrl}/years/${year}/month/monthReview/subjective/${monthId}`;
    return fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed', response);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.updateReviewSubjective = (year, updatedTextbox) => {
    const url = `${baseUrl}/years/${year}/month/monthReview/subjective`;
    const fetchOptions = {
        method: 'PUT',
        body: JSON.stringify({textbox: updatedTextbox})
    };
    return fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed', response);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

// YEAR REVIEW SECTION
Express.getYearTableSkills = year => {
    const url = `${baseUrl}/years/${year}/yearReview/table/${year}`;
    return fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed', response);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.getYearCheckboxSkills = year => {
    const url = `${baseUrl}/years/${year}/yearReview/checkbox/${year}`;
    return fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed', response);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.createYearReviewSubjective = (year, newTextbox) => {
    const url = `${baseUrl}/years/${year}/yearReview/subjective`;
    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify({textbox: newTextbox})
    };
    return fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed', response);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.getYearReviewSubjective = year => {
    const url = `${baseUrl}/years/${year}/yearReview/subjective/${year}`;
    return fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed', response);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.updateYearReviewSubjective = (year, updatedTextbox) => {
    const url = `${baseUrl}/years/${year}/yearReview/subjective`;
    const fetchOptions = {
        method: 'PUT',
        body: JSON.stringify({textbox: updatedTextbox})
    };
    return fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress', response);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

export default Express;