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
    fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress error');
        return;
    }, networkError => {
        console.log(networkError.message);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => {
        console.log(error);
    })
};

Express.createMonth = (year, month) => {
    const url = `${baseUrl}/years/${year}`;
    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify({month: month})
    };
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
    const fetchOptions = {method: "DELETE"};
    fetch(url, fetchOptions).then(response => {
        if(response.ok){
            alert('Successfully Deleted');
            return;
        }
        alert('Are you Sure you want to delete everything for this year?')
        //add confirm() to frontend and delete this alert.
    })
};

//WEEK SEGMENT

Express.getWeeks = (year, monthId) => {
    const url = `${baseUrl}/years/${year}/month?year=${year}&monthId=${monthId}`;
    fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress Error');
        return;
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error))
};

Express.createWeek = (year, week, date, monthId) => {
    const url = `${baseUrl}/years/${year}/month`; //?yearFK=${year}&week=${date}&monthId=${monthId}
    const fetchOptions = {
        method: "POST",
        body: JSON.stringify({week: week}) //readjust frontend to give one object (week) with required info
    };
    fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress Error');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error))
};

Express.deleteWeek = (year, weekId) => {
    const url = `${baseUrl}/years/${year}/month`;
    const fetchOptions = {
        method: 'DELETE',
        body: JSON.stringify({weekId: weekId})
    }
    fetch(url, fetchOptions).then(response => {
        if(response.ok){
            alert('Succesfully Deleted');
            return;
        }
        return; //decide how you want deletion flow. At what point does user confirm deletion?
    }, networkError => console.log(networkError.message));
};

//TIMELOGGER SEGMENT
Express.getTables = (year, weekId) => {
    const url = `${baseUrl}/years/${year}/month/table?weekId=${weekId}`;
    fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress Error');
        return;
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.deleteTable = (year, id) => {
    const url = `${baseUrl}/years/${year}/month/table?id=${id}`;
    const fetchOptions = {
        method: 'DELETE'
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
        body: JSON.stringify({table: newTable})
    };
    fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress Error');
        return;
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.updateTable = (year, updatedTable) => {
    const url = `${baseUrl}/years/${year}/month/table`;
    const fetchOptions = {
        method: 'PUT',
        body: JSON.stringify({table: updatedTable})
    };
    fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        alert('Error: Total Goal Hours must contain value, Name of skill cannot be left blank');
        return;
    })
    .then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

//CHECKBOX SECTION

Express.getCheckboxes = (year, weekId) => {
    const url = `${baseUrl}/years/${year}/month/checkbox?weekId=${weekId}`;
    fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed');
        return;
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.createCheckbox = (year, newCheckbox) => {
    const url = `${baseUrl}/years/${year}/month/checkbox`;
    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify({checkbox: newCheckbox})
    };
    fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed');
        return;
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.updateCheckbox = (year, updatedCheckbox) => {
    const url = `${baseUrl}/year/${year}/month/checkbox`;
    const fetchOptions = {
        method: 'PUT',
        body: JSON.stringify({checkbox: updatedCheckbox})
    };
    fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed')
        return;
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.deleteCheckbox = (year, id) => {
    const url = `${baseUrl}/years/${year}/month/checkbox?id=${id}`;
    fetch(url, {method: 'DELETE'}).then(response => {
        if(response.ok){
            alert('Successfully Deleted')
        }
    }).catch(error => console.log(error));
};

Express.getSubjectives = (year, weekId) => {
    const url = `${baseUrl}/years/${year}/month/subjective?weekId=${weekId}`;
    fetch(url).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed', response);
        return;
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.createSubjective = (year, newTextbox) => {
    const url = `${baseUrl}/years/${year}/month/subjective`;
    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify({textbox: newTextbox})
    };
    fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed', response);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.updateSubjective = (year, updatedTextbox) => {
    const url = `${baseUrl}/years/${year}/month/subjective`;
    const fetchOptions = {
        method: "PUT",
        body: JSON.stringify({textbox: updatedTextbox})
    };
    fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress failed', response);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

Express.deleteSubjective = (year, id) => {
    const url = `${baseUrl}/years/${year}/month/subjective?id=${id}`;
    const fetchOptions = {method: 'DELETE'};
    fetch(url, fetchOptions).then(response => {
        if(response.ok){
            alert('Successfully Deleted');
        }
    }).catch(error => console.log(error));
};

//MONTH REVIEW SECTION
 
Express.getTableSkills = (year, monthId) => {
    const url = `${baseUrl}/years/${year}/month/monthReview/table/${monthId}`;
    fetch(url).then(response => {
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
    fetch(url).then(response => {
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
    fetch(url, fetchOptions).then(response => {
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
    fetch(url).then(response => {
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
    fetch(url, fetchOptions).then(response => {
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
    fetch(url).then(response => {
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
    fetch(url).then(response => {
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
    fetch(url, fetchOptions).then(response => {
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
    fetch(url).then(response => {
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
    fetch(url, fetchOptions).then(response => {
        if(response.ok){
            return response.json();
        }
        console.log('fetchExpress', response);
    }).then(jsonResponse => {
        return jsonResponse;
    }).catch(error => console.log(error));
};

module.exports = Express;