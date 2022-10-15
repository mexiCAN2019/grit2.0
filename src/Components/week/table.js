import React, { useState, useEffect } from 'react';
import Express from './../../fetchExpress';
import './table.css';
import { 
    TextField,
    Button,
    Grid,
    Card,
    TableContainer,
    Table,
    TableRow,
    TableCell,
    Dialog,
    DialogTitle,
    Container
} from '@mui/material'

function Tables({ activity, year, onDelete, handleSnackBar }) {
    const [editOpen, setEditOpen] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [skillName, setSkillName] = useState(activity.skillName);

    const [learningMondayHours, setLearningMondayHours] = useState(activity.learningMondayHours);
    const [learningMondayMinutes, setLearningMondayMinutes] = useState(activity.learningMondayMinutes);
    const [learningTuesdayHours, setLearningTuesdayHours] = useState(activity.learningTuesdayHours);
    const [learningTuesdayMinutes, setLearningTuesdayMinutes] = useState(activity.learningTuesdayMinutes);
    const [learningWednesdayHours, setLearningWednesdayHours] = useState(activity.learningWednesdayHours);
    const [learningWednesdayMinutes, setLearningWednesdayMinutes] = useState(activity.learningWednesdayMinutes);
    const [learningThursdayHours, setLearningThursdayHours] = useState(activity.learningThursdayHours);
    const [learningThursdayMinutes, setLearningThursdayMinutes] = useState(activity.learningThursdayMinutes);
    const [learningFridayHours, setLearningFridayHours] = useState(activity.learningFridayHours);
    const [learningFridayMinutes, setLearningFridayMinutes] = useState(activity.learningFridayMinutes);
    const [learningSaturdayHours, setLearningSaturdayHours] = useState(activity.learningSaturdayHours);
    const [learningSaturdayMinutes, setLearningSaturdayMinutes] = useState(activity.learningSaturdayMinutes);
    const [learningSundayHours, setLearningSundayHours] = useState(activity.learningSundayHours);
    const [learningSundayMinutes, setLearningSundayMinutes] = useState(activity.learningSundayMinutes);
    const [learningGoalHours, setLearningGoalHours] = useState(activity.learningGoalHours);
    const [learningGoalMinutes, setLearningGoalMinutes] = useState(activity.learningGoalMinutes);

    const [practicingMondayHours, setPracticingMondayHours] = useState(activity.practicingMondayHours);
    const [practicingMondayMinutes, setPracticingMondayMinutes] = useState(activity.practicingMondayMinutes);
    const [practicingTuesdayHours, setPracticingTuesdayHours] = useState(activity.practicingTuesdayHours);
    const [practicingTuesdayMinutes, setPracticingTuesdayMinutes] = useState(activity.practicingTuesdayMinutes);
    const [practicingWednesdayHours, setPracticingWednesdayHours] = useState(activity.practicingWednesdayHours);
    const [practicingWednesdayMinutes, setPracticingWednesdayMinutes] = useState(activity.practicingWednesdayMinutes);
    const [practicingThursdayHours, setPracticingThursdayHours] = useState(activity.practicingThursdayHours);
    const [practicingThursdayMinutes, setPracticingThursdayMinutes] = useState(activity.practicingThursdayMinutes);
    const [practicingFridayHours, setPracticingFridayHours] = useState(activity.practicingFridayHours);
    const [practicingFridayMinutes, setPracticingFridayMinutes] = useState(activity.practicingFridayMinutes);
    const [practicingSaturdayHours, setPracticingSaturdayHours] = useState(activity.practicingSaturdayHours);
    const [practicingSaturdayMinutes, setPracticingSaturdayMinutes] = useState(activity.practicingSaturdayMinutes);
    const [practicingSundayHours, setPracticingSundayHours] = useState(activity.practicingSundayHours);
    const [practicingSundayMinutes, setPracticingSundayMinutes] = useState(activity.practicingSundayMinutes);
    const [practicingGoalHours, setPracticingGoalHours] = useState(activity.practicingGoalHours);
    const [practicingGoalMinutes, setPracticingGoalMinutes] = useState(activity.practicingGoalMinutes);

    const [performingMondayHours, setPerformingMondayHours] = useState(activity.performingMondayHours);
    const [performingMondayMinutes, setPerformingMondayMinutes] = useState(activity.performingMondayMinutes);
    const [performingTuesdayHours, setPerformingTuesdayHours] = useState(activity.performingTuesdayHours);
    const [performingTuesdayMinutes, setPerformingTuesdayMinutes] = useState(activity.performingTuesdayMinutes);
    const [performingWednesdayHours, setPerformingWednesdayHours] = useState(activity.performingWednesdayHours);
    const [performingWednesdayMinutes, setPerformingWednesdayMinutes] = useState(activity.performingWednesdayMinutes);
    const [performingThursdayHours, setPerformingThursdayHours] = useState(activity.performingThursdayHours);
    const [performingThursdayMinutes, setPerformingThursdayMinutes] = useState(activity.performingThursdayMinutes);
    const [performingFridayHours, setPerformingFridayHours] = useState(activity.performingFridayHours);
    const [performingFridayMinutes, setPerformingFridayMinutes] = useState(activity.performingFridayMinutes);
    const [performingSaturdayHours, setPerformingSaturdayHours] = useState(activity.performingSaturdayHours);
    const [performingSaturdayMinutes, setPerformingSaturdayMinutes] = useState(activity.performingSaturdayMinutes);
    const [performingSundayHours, setPerformingSundayHours] = useState(activity.performingSundayHours);
    const [performingSundayMinutes, setPerformingSundayMinutes] = useState(activity.performingSundayMinutes);
    const [performingGoalHours, setPerformingGoalHours] = useState(activity.performingGoalHours);
    const [performingGoalMinutes, setPerformingGoalMinutes] = useState(activity.performingGoalMinutes);

    const [totalGoalHours, setTotalGoalHours] = useState(activity.totalGoalHours);
    const [totalGoalMinutes, setTotalGoalMinutes] = useState(activity.totalGoalMinutes);

    const [totalLearningHours, setTotalLearningHours] = useState(0);
    const [totalLearningMinutes, setTotalLearningMinutes] = useState(0);
    const [totalPracticingHours, setTotalPracticingHours] = useState(0);
    const [totalPracticingMinutes, setTotalPracticingMinutes] = useState(0);
    const [totalPerformingHours, setTotalPerformingHours] = useState(0);
    const [totalPerformingMinutes, setTotalPerformingMinutes] = useState(0);
    const [overallHours, setOverallHours] = useState(0);
    const [overallMinutes, setOverallMinutes] = useState(0);

    useEffect(() => {
        handleAddTime();
    }, [])

    useEffect(() => {
          window.addEventListener("resize", () => setWindowSize(window.innerWidth));
      
          return () => window.removeEventListener("resize", () => setWindowSize(window.innerWidth)) 
    }, []);

    const addLearningTime = () => {

        const totalHours = learningMondayHours + learningTuesdayHours + learningWednesdayHours + learningThursdayHours + learningFridayHours + learningSaturdayHours + learningSundayHours;
        const totalMinutes = learningMondayMinutes + learningTuesdayMinutes + learningWednesdayMinutes + learningThursdayMinutes + learningFridayMinutes + learningSaturdayMinutes + learningSundayMinutes;
        if(totalMinutes >= 60){
            const hoursToAdd = Math.floor(totalMinutes / 60);
            const minutesRemainder = Math.round(totalMinutes % 60);
            setTotalLearningHours(totalHours + hoursToAdd)
            setTotalLearningMinutes(minutesRemainder);
        } else {
            setTotalLearningHours(totalHours);
            setTotalLearningMinutes(totalMinutes);
        };
    };

    const addPracticingTime = () => {

        const totalHours = practicingMondayHours + practicingTuesdayHours + practicingWednesdayHours + practicingThursdayHours + practicingFridayHours + practicingSaturdayHours + practicingSundayHours;
        const totalMinutes = practicingMondayMinutes + practicingTuesdayMinutes + practicingWednesdayMinutes + practicingThursdayMinutes + practicingFridayMinutes + practicingSaturdayMinutes + practicingSundayMinutes;
        console.log(totalHours);
        console.log(totalMinutes);
        if(totalMinutes >= 60){
            const hoursToAdd = Math.floor(totalMinutes / 60);
            const minutesRemainder = Math.round(totalMinutes % 60);
            setTotalPracticingHours(totalHours + hoursToAdd)
            setTotalPracticingMinutes(minutesRemainder);
        } else {
            setTotalPracticingHours(totalHours);
            setTotalPracticingMinutes(totalMinutes);
        };
    };

    const addPerformingTime = () => {

        const totalHours = performingMondayHours + performingTuesdayHours + performingWednesdayHours + performingThursdayHours + performingFridayHours + performingSaturdayHours + performingSundayHours;
        const totalMinutes = performingMondayMinutes + performingTuesdayMinutes + performingWednesdayMinutes + performingThursdayMinutes + performingFridayMinutes + performingSaturdayMinutes + performingSundayMinutes;
        if(totalMinutes >= 60){
            const hoursToAdd = Math.floor(totalMinutes / 60);
            const minutesRemainder = Math.round(totalMinutes % 60);
            setTotalPerformingHours(totalHours + hoursToAdd)
            setTotalPerformingMinutes(minutesRemainder);
        } else {
            setTotalPerformingHours(totalHours);
            setTotalPerformingMinutes(totalMinutes);
        };
    };

    const addOverallTime = () => {
        const totalHours = totalLearningHours + totalPracticingHours + totalPerformingHours;
        const totalMinutes = totalLearningMinutes + totalPracticingMinutes + totalPerformingMinutes;
        if(totalMinutes >= 60){
            const hoursToAdd = Math.floor(totalMinutes / 60);
            const minutesRemainder = Math.round(totalMinutes % 60);
            setOverallHours(totalHours + hoursToAdd)
            setOverallMinutes(minutesRemainder);
        } else {
            setOverallHours(totalHours);
            setOverallMinutes(totalMinutes);
        };
    };

    const handleAddTime = () => {
        addLearningTime()
        addPracticingTime();
        addPerformingTime();
        addOverallTime();
    };

    const handleSaveChanges = () => {
        const updatedTable = {
            id: activity.id,
            skillName: skillName.toUpperCase(),
            learning: {     
                monday: {
                    hours: learningMondayHours, 
                    minutes:learningMondayMinutes
                },
                tuesday: {
                    hours: learningTuesdayHours, 
                    minutes: learningTuesdayMinutes
                },
                wednesday: {
                    hours: learningWednesdayHours, 
                    minutes: learningWednesdayMinutes
                },
                thursday: {
                    hours: learningThursdayHours, 
                    minutes: learningThursdayMinutes
                },
                friday: {
                    hours: learningFridayHours, 
                    minutes: learningFridayMinutes
                },
                saturday: {
                    hours: learningSaturdayHours, 
                    minutes: learningSaturdayMinutes
                },
                sunday: {
                    hours: learningSundayHours, 
                    minutes: learningSundayMinutes
                },
                actual: {
                    hours: totalLearningHours,
                    minutes: totalLearningMinutes
                },
                goal: {
                    hours: learningGoalHours, 
                    minutes: learningGoalMinutes
                }
            },
            practicing: {
                monday: {
                    hours: practicingMondayHours, 
                    minutes: practicingMondayMinutes
                },
                tuesday: {
                    hours: practicingTuesdayHours, 
                    minutes: practicingTuesdayMinutes
                },
                wednesday: {
                    hours: practicingWednesdayHours, 
                    minutes: practicingWednesdayMinutes
                },
                thursday: {
                    hours: practicingThursdayHours, 
                    minutes: practicingThursdayMinutes
                },
                friday: {
                    hours: practicingFridayHours, 
                    minutes: practicingFridayMinutes
                },
                saturday: {
                    hours: practicingSaturdayHours, 
                    minutes: practicingSaturdayMinutes
                },
                sunday: {
                    hours: practicingSundayHours, 
                    minutes: practicingSundayMinutes
                },
                actual: {
                    hours: totalPracticingHours,
                    minutes: totalPracticingMinutes
                },
                goal: {
                    hours: practicingGoalHours, 
                    minutes: practicingGoalMinutes
                }
            },
            performing: {
                monday: {
                    hours: performingMondayHours, 
                    minutes: performingMondayMinutes
                },
                tuesday: {
                    hours: performingTuesdayHours, 
                    minutes: performingTuesdayMinutes
                },
                wednesday: {
                    hours: performingWednesdayHours, 
                    minutes: performingWednesdayMinutes
                },
                thursday: {
                    hours: performingThursdayHours, 
                    minutes: performingThursdayMinutes
                },
                friday: {
                    hours: performingFridayHours, 
                    minutes: performingFridayMinutes
                },
                saturday: {
                    hours: performingSaturdayHours, 
                    minutes: performingSaturdayMinutes
                },
                sunday: {
                    hours: performingSundayHours, 
                    minutes: performingSundayMinutes
                },
                actual: {
                    hours: totalPerformingHours,
                    minutes: totalPerformingMinutes
                },
                goal: {
                    hours: performingGoalHours, 
                    minutes: performingGoalMinutes
                }
            },
            total: {
                actual: {
                    hours: overallHours,
                    minutes: overallMinutes
                },
                goal: {
                    hours: totalGoalHours, 
                    minutes: totalGoalMinutes
                }
            }
        };
        Express.updateTable(year, updatedTable).then(response => {
            if(response === 200) {
                handleSnackBar('successSave')
            } else{
                handleSnackBar('error')
            }
        });

        setEditOpen(false);
    };


    if(windowSize < 1200) {
        return (
            <Card style={{margin: '30px 100px', padding: '15px', borderRadius: '10px', maxWidth: '220px'}}>
                <TextField required style={{display: 'block', marginBottom: ''}} id="outlined-required" label="Skill" defaultValue={activity.skillName} onChange={(e) => setSkillName(e.target.value)} />
                <div style={{margin: '10px 0px 20px 0px'}}>
                    <Button style={{marginRight: '20px'}} variant='outlined' onClick={() => onDelete('table', activity)}>Delete</Button>
                    <Button onClick={()=> setEditOpen(true)} variant='contained'>Edit</Button>
                </div>
                <p> <u>Learning</u>: {totalLearningHours} hrs {totalLearningMinutes} min</p>
                <p> <u>Practicing</u>: {totalPracticingHours} hrs {totalPracticingMinutes} min</p>
                <p> <u>Performing</u>: {totalPerformingHours} hrs {totalPerformingMinutes} min</p>
                <p> <strong>Total</strong>: {overallHours} hrs {overallMinutes} min</p>
                <p> <strong>Total Goal</strong>: {totalGoalHours} hrs {totalGoalMinutes} min</p>
                <span>{windowSize}</span>

                <Dialog onClose={() => setEditOpen(false)} open={editOpen} fullWidth={true} maxWidth="md">
                <Container className="table">
                    <DialogTitle>Learning</DialogTitle>
                    <Grid container rowSpacing={3} columnSpacing={2}>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Monday Hours" defaultValue={activity.learningMondayHours} onChange={(e) => setLearningMondayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField className="minutes" type="number" inputProps={{min: '0'}} label="Monday Minutes" defaultValue={activity.learningMondayMinutes} onChange={(e) => setLearningMondayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Tuesday Hours" defaultValue={activity.learningTuesdayHours} onChange={(e) => setLearningTuesdayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Tuesday Minutes" defaultValue={activity.learningTuesdayMinutes} onChange={(e) => setLearningTuesdayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Wednesday Hours" defaultValue={activity.learningWednesdayHours} onChange={(e) => setLearningWednesdayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Wednesday Minutes" defaultValue={activity.learningWednesdayMinutes} onChange={(e) => setLearningWednesdayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Thursday Hours" defaultValue={activity.learningThursdayHours} onChange={(e) => setLearningThursdayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Thursday Minutes" defaultValue={activity.learningThursdayMinutes} onChange={(e) => setLearningThursdayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Friday Hours" defaultValue={activity.learningFridayHours} onChange={(e) => setLearningFridayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Friday Minutes" defaultValue={activity.learningFridayMinutes} onChange={(e) => setLearningFridayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Saturday Hours" defaultValue={activity.learningSaturdayHours} onChange={(e) => setLearningSaturdayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Saturday Minutes" defaultValue={activity.learningSaturdayMinutes} onChange={(e) => setLearningSaturdayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Sunday Hours" defaultValue={activity.learningSundayHours} onChange={(e) => setLearningSundayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Sunday Minutes" defaultValue={activity.learningSundayMinutes} onChange={(e) => setLearningSundayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Goal Hours" defaultValue={activity.learningSaturdayHours} onChange={(e) => setLearningGoalHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Goal Minutes" defaultValue={activity.learningSaturdayMinutes} onChange={(e) => setLearningGoalMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                    </Grid>
                    <DialogTitle>Practicing</DialogTitle>
                    <Grid container rowSpacing={3} columnSpacing={2}>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Monday Hours" defaultValue={activity.practicingMondayHours} onChange={(e) => setPracticingMondayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Monday Minutes" defaultValue={activity.practicingMondayMinutes} onChange={(e) => setPracticingMondayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Tuesday Hours" defaultValue={activity.practicingTuesdayHours} onChange={(e) => setPracticingTuesdayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Tuesday Minutes" defaultValue={activity.practicingTuesdayMinutes} onChange={(e) => setPracticingTuesdayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Wednesday Hours" defaultValue={activity.practicingWednesdayHours} onChange={(e) => setPracticingWednesdayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Wednesday Minutes" defaultValue={activity.practicingWednesdayMinutes} onChange={(e) => setPracticingWednesdayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Thursday Hours" defaultValue={activity.practicingThursdayHours} onChange={(e) => setPracticingThursdayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Thursday Minutes" defaultValue={activity.practicingThursdayMinutes} onChange={(e) => setPracticingThursdayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Friday Hours" defaultValue={activity.practicingFridayHours} onChange={(e) => setPracticingFridayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Friday Minutes" defaultValue={activity.practicingFridayMinutes} onChange={(e) => setPracticingFridayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Saturday Hours" defaultValue={activity.practicingSaturdayHours} onChange={(e) => setPracticingSaturdayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Saturday Minutes" defaultValue={activity.practicingSaturdayMinutes} onChange={(e) => setPracticingSaturdayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Sunday Hours" defaultValue={activity.practicingSundayHours} onChange={(e) => setPracticingSundayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Sunday Minutes" defaultValue={activity.practicingSundayMinutes} onChange={(e) => setPracticingSundayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Goal Hours" defaultValue={activity.practicingSaturdayHours} onChange={(e) => setPracticingGoalHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Goal Minutes" defaultValue={activity.practicingSaturdayMinutes} onChange={(e) => setPracticingGoalMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                    </Grid>
                    <DialogTitle>Performing</DialogTitle>
                    <Grid container rowSpacing={3} columnSpacing={2}>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Monday Hours" defaultValue={activity.performingMondayHours} onChange={(e) => setPerformingMondayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Monday Minutes" defaultValue={activity.performingMondayMinutes} onChange={(e) => setPerformingMondayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Tuesday Hours" defaultValue={activity.performingTuesdayHours} onChange={(e) => setPerformingTuesdayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Tuesday Minutes" defaultValue={activity.performingTuesdayMinutes} onChange={(e) => setPerformingTuesdayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Wednesday Hours" defaultValue={activity.performingWednesdayHours} onChange={(e) => setPerformingWednesdayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Wednesday Minutes" defaultValue={activity.performingWednesdayMinutes} onChange={(e) => setPerformingWednesdayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Thursday Hours" defaultValue={activity.performingThursdayHours} onChange={(e) => setPerformingThursdayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Thursday Minutes" defaultValue={activity.performingThursdayMinutes} onChange={(e) => setPerformingThursdayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Friday Hours" defaultValue={activity.performingFridayHours} onChange={(e) => setPerformingFridayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Friday Minutes" defaultValue={activity.performingFridayMinutes} onChange={(e) => setPerformingFridayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Saturday Hours" defaultValue={activity.performingSaturdayHours} onChange={(e) => setPerformingSaturdayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Saturday Minutes" defaultValue={activity.performingSaturdayMinutes} onChange={(e) => setPerformingSaturdayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Sunday Hours" defaultValue={activity.performingSundayHours} onChange={(e) => setPerformingSundayHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Sunday Minutes" defaultValue={activity.performingSundayMinutes} onChange={(e) => setPerformingSundayMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Goal Hours" defaultValue={activity.performingSaturdayHours} onChange={(e) => setPerformingGoalHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField type="number" inputProps={{min: '0'}} label="Goal Minutes" defaultValue={activity.performingSaturdayMinutes} onChange={(e) => setPerformingGoalMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                    </Grid>
                    <DialogTitle>Total Hours <span>*required</span></DialogTitle>
                    <Grid container rowSpacing={3} columnSpacing={2}>
                        <Grid item xs={6}>
                            <span><TextField required type="number" inputProps={{min: '0'}} label="Total Goal Hours" defaultValue={activity.totalGoalHours} onChange={(e) => setTotalGoalHours(Number(e.target.value))} /> hrs</span>
                        </Grid>
                        <Grid item xs={6}>
                            <span><TextField required type="number" inputProps={{min: '0'}} label="Total Goal Minutes" defaultValue={activity.totalGoalMinutes} onChange={(e) => setTotalGoalMinutes(Number(e.target.value))} /> min</span>
                        </Grid>
                    </Grid>
                    <p>Click "Add Time" twice before saving changes</p>
                    <Button style={{margin: 'auto, 10px'}} variant='outlined' onClick={handleAddTime}>Add Time</Button> {/* have to double click to add total time */}
                    <Button style={{}} variant='contained' onClick={handleSaveChanges}>Save Changes</Button>
                </Container>
            </Dialog>
            </Card>
        )
    }

    return (
        <Grid container alignItems="center" direction="column" spacing={2}>
            <Card style={{margin: '30px 100px', padding: '15px', borderRadius: '10px'}}>
            <Grid item>
                <TextField required id="outlined-required" label="Skill" defaultValue={activity.skillName} onChange={(e) => setSkillName(e.target.value)} />
                <div style={{display: 'block', margin: '20px 0px 10px 0px'}}>
                    <p><em>Click "Add Time" twice before saving changes</em></p>
                    <Button variant='outlined' onClick={() => onDelete('table', activity)}>Delete</Button>
                    <Button style={{margin: 'auto 10px'}} variant='outlined' onClick={handleAddTime}>Add Time</Button> {/* have to double click to add total time */}
                    <Button  variant='contained' onClick={handleSaveChanges}>Save Changes</Button>
                </div>
            </Grid>
            <Grid item>
            <TableContainer>
                <Table>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Monday</TableCell>
                        <TableCell>Tuesday</TableCell>
                        <TableCell>Wednesday</TableCell>
                        <TableCell>Thursday</TableCell>
                        <TableCell>Friday</TableCell>
                        <TableCell>Saturday</TableCell>
                        <TableCell>Sunday</TableCell>
                        <TableCell>Actual</TableCell>
                        <TableCell>Goal</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Learning</TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningMondayHours(Number(e.target.value))} defaultValue={activity.learningMondayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningMondayMinutes(Number(e.target.value))} defaultValue={activity.learningMondayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningTuesdayHours(Number(e.target.value))} defaultValue={activity.learningTuesdayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningTuesdayMinutes(Number(e.target.value))} defaultValue={activity.learningTuesdayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningWednesdayHours(Number(e.target.value))} defaultValue={activity.learningWednesdayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningWednesdayMinutes(Number(e.target.value))} defaultValue={activity.learningWednesdayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningThursdayHours(Number(e.target.value))} defaultValue={activity.learningThursdayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningThursdayMinutes(Number(e.target.value))} defaultValue={activity.learningThursdayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningFridayHours(Number(e.target.value))} defaultValue={activity.learningFridayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningFridayMinutes(Number(e.target.value))} defaultValue={activity.learningFridayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningSaturdayHours(Number(e.target.value))} defaultValue={activity.learningSaturdayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningSaturdayMinutes(Number(e.target.value))} defaultValue={activity.learningSaturdayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningSundayHours(Number(e.target.value))} defaultValue={activity.learningSundayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningSundayMinutes(Number(e.target.value))} defaultValue={activity.learningSundayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p>{totalLearningHours} hrs</p>
                            <p>{totalLearningMinutes} min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningGoalHours(Number(e.target.value))} defaultValue={activity.learningGoalHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setLearningGoalMinutes(Number(e.target.value))} defaultValue={activity.learningGoalMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Practicing</TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingMondayHours(Number(e.target.value))} defaultValue={activity.practicingMondayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingMondayMinutes(Number(e.target.value))} defaultValue={activity.practicingMondayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingTuesdayHours(Number(e.target.value))} defaultValue={activity.practicingTuesdayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingTuesdayMinutes(Number(e.target.value))} defaultValue={activity.practicingTuesdayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingWednesdayHours(Number(e.target.value))} defaultValue={activity.practicingWednesdayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingWednesdayMinutes(Number(e.target.value))} defaultValue={activity.practicingWednesdayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingThursdayHours(Number(e.target.value))} defaultValue={activity.practicingThursdayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingThursdayMinutes(Number(e.target.value))} defaultValue={activity.practicingThursdayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingFridayHours(Number(e.target.value))} defaultValue={activity.practicingFridayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingFridayMinutes(Number(e.target.value))} defaultValue={activity.practicingFridayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingSaturdayHours(Number(e.target.value))} defaultValue={activity.practicingSaturdayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingSaturdayMinutes(Number(e.target.value))} defaultValue={activity.practicingSaturdayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingSundayHours(Number(e.target.value))} defaultValue={activity.practicingSundayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingSundayMinutes(Number(e.target.value))} defaultValue={activity.practicingSundayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p>{totalPracticingHours} hrs</p>
                            <p>{totalPracticingMinutes} min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingGoalHours(Number(e.target.value))} defaultValue={activity.practicingGoalHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPracticingGoalMinutes(Number(e.target.value))} defaultValue={activity.practicingGoalMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Performing</TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingMondayHours(Number(e.target.value))} defaultValue={activity.performingMondayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingMondayMinutes(Number(e.target.value))} defaultValue={activity.performingMondayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingTuesdayHours(Number(e.target.value))} defaultValue={activity.performingTuesdayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingTuesdayMinutes(Number(e.target.value))} defaultValue={activity.performingTuesdayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingWednesdayHours(Number(e.target.value))} defaultValue={activity.performingWednesdayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingWednesdayMinutes(Number(e.target.value))} defaultValue={activity.performingWednesdayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingThursdayHours(Number(e.target.value))} defaultValue={activity.performingThursdayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingThursdayMinutes(Number(e.target.value))} defaultValue={activity.performingThursdayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingFridayHours(Number(e.target.value))} defaultValue={activity.performingFridayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingFridayMinutes(Number(e.target.value))} defaultValue={activity.performingFridayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingSaturdayHours(Number(e.target.value))} defaultValue={activity.performingSaturdayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingSaturdayMinutes(Number(e.target.value))} defaultValue={activity.performingSaturdayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingSundayHours(Number(e.target.value))} defaultValue={activity.performingSundayHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingSundayMinutes(Number(e.target.value))} defaultValue={activity.performingSundayMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                        <TableCell>
                            <p>{totalPerformingHours} hrs</p>
                            <p>{totalPerformingMinutes} min</p>
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingGoalHours(Number(e.target.value))} defaultValue={activity.performingGoalHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setPerformingGoalMinutes(Number(e.target.value))} defaultValue={activity.performingGoalMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={7} />
                        <TableCell>
                            Total
                        </TableCell>
                        <TableCell>
                            <p>{overallHours} hrs</p>
                            <p>{overallMinutes} min</p> 
                        </TableCell>
                        <TableCell>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setTotalGoalHours(Number(e.target.value))} defaultValue={activity.totalGoalHours} type="number" size='small' inputProps={{min: '0'}} /> hr</p>
                            <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><TextField onChange={(e) => setTotalGoalMinutes(Number(e.target.value))} defaultValue={activity.totalGoalMinutes} type="number" size='small' inputProps={{min: '0'}} /> min</p>
                        </TableCell>
                    </TableRow>
                </Table>
            </TableContainer>
            </Grid>
            </Card>
        </Grid>
    )
}

export default Tables;