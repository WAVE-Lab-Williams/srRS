/*
===============================================================
PUSHING/RUNNING A CUSTOM SINGLE TRIAL (*singleTrial)
===============================================================
*/
function runSingleTrial(
    stimColor,
    stimDuration,
    timelineTrialsToPush,
    trialType,
) {

    /*--------------------------- General Utility ---------------------------*/
    var checkScreen = {
        type: jsPsychFullscreen,
        message:
            '<p>Unfortunately, it appears you are no longer in fullscreen mode. Please make sure to remain in fullscreen mode. <br>Click on the button to fullscreen the experiment again and proceed.</p>',
        fullscreen_mode: true,
        button_label: 'Resume',
    };

    var if_notFull = {
        timeline: [checkScreen],
        conditional_function: function () {
            if (full_check == false) {
                return true;
            } else {
                return false;
            }
        },
    };

    var cursor_off = {
        type: jsPsychCallFunction,
        func: function () {
            document.body.style.cursor = 'none';
        },
    };

    var cursor_on = {
        type: jsPsychCallFunction,
        func: function () {
            document.body.style.cursor = 'auto';
        },
    };

    /*--------------------------- Experiment specific variables ---------------------------*/
    var thisStim = `${stimFolder}${stimColor}.png`
    var persistent_prompt = `<div style="position: fixed; top: 50px; left: 50%; transform: translateX(-50%); text-align: center;"> </div>`;

    // // create coordinates that randomly deviate the images about the boxes
    // let jitterCoords_x = [];
    // let jitterCoords_y = [];
    // let min_jitter = 0 ;
    // // let max_jitter_w = 0.5*boxWidth;
    // // let max_jitter_h = 0.5*boxHeight;
    // let max_jitter_w = 0.005*boxWidth;
    // let max_jitter_h = 0.005*boxHeight;
    //
    // for(let i = 0; i < evenCoords_x.length; i++) {
    //     let jitx = randomIntFromRange(min_jitter, max_jitter_w) * randomChoice([-1,1], 1)[0];
    //     let jity = randomIntFromRange(min_jitter, max_jitter_h)* randomChoice([-1,1], 1)[0];
    //     jitterCoords_x.push(evenCoords_x[i] + jitx);
    //     jitterCoords_y.push(evenCoords_y[i] + jity);
    //
    //
    // };

    var dispCircle = {
        type: jsPsychImageKeyboardResponse,
        stimulus: thisStim,
        choices: 'NO_KEYS',
        stimulus_height: imgHeight,
        stimulus_duration: stimDuration,
        trial_duration: null,
        response_ends_trial: true,
        prompt: `${persistent_prompt}`,
        data: {
            trial_category: 'answer'+trialType,
            trial_stimulus: thisStim,
            trial_duration: stimDuration,
            // correct_response: function(){
            //     if (stimColor === 'blue') {
            //         return 'f';
            //     } else if (stimColor === 'orange') {
            //         return 'j';
            //     }
            // }, //correct response end
        } // data end
    }; // dispCircle end
    //
    // function visualSearchDisp(jitterCoords_x,jitterCoords_y){
    //     var visualSearch = {
    //         type: jsPsychHtmlKeyboardResponse,
    //         choices: 'NO_KEYS',
    //         trial_duration: dispTime,
    //         stimulus: function(){
    //             let crowd = [];
    //
    //             for(image = 0; image < (cols*rows); image++) {
    //                 let scale = randomIntFromRange(MIN_SCALE, MAX_SCALE)/100;
    //                 console.log(`number of people is ${image}`)
    //                 crowd.push(`<img src = "${stimFolder + PEOPLE[image]}" style="width: ${Math.floor(scale*imgWidth)}px; position:absolute; bottom: ${jitterCoords_y[image]}px; left: ${jitterCoords_x[image]}px" />`)
    //             };
    //
    //
    //             return crowd.join(" ")
    //
    //         }, // end stimulus
    //         data: {
    //             trial_category: 'visual_search',
    //             trial_index_block: trialIndex,
    //             trial_duration:dispTime,
    //             people_shown: PEOPLE,
    //         } // end data
    //     };
    //     return visualSearch
    // }

    // Inter Stimulus Interval
    var isi = {
        type: jsPsychHtmlKeyboardResponse,
        choices: 'NO_KEYS',
        trial_duration: 300,
        stimulus: '<div style="height:30vh"></div>',
        data: { trial_category: 'isi', trial_index_block: trialIndex }
    };
        

    //randomly selected people

    var personSlider = {
        type: jsPsychHtmlSliderResponseResizing,
        prompt: '<div style="text-align:center; font-size:20px; margin-bottom:16px;">Use the slider to set this person to the size you remember seeing.</div>',
        stimulus: `<img src = "${stimFolder + stimColor}.png" />`,
        // stimulus: `<img src = "${stimFolder}BF11.png" style="width: ${imgWidth}px" />`,
        min: 50,
        max: 100,
        slider_start: (50+100)/2
    };

    var prestim = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `${persistent_prompt}`,
        choices: "NO_KEYS",
        trial_duration: PRESTIM_DISP_TIME,
        data: {
            trial_category: 'prestim_ISI' + trialType,
        }
    };

    var fixation = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `${persistent_prompt}<div style="font-size:60px;">+</div>`,
        choices: "NO_KEYS",
        trial_duration: FIXATION_DISP_TIME,
        data: {
            trial_category: 'fixation' + trialType,
        }
    };


    /*--------------------------- push single trial sequence ---------------------------*/
    
    // troubleshooting code - to remove 
    // if (!Array.isArray(timelineTrialsToPush)) { throw new Error('Expected an array for timelineTrialsToPush'); }



    timelineTrialsToPush.push(if_notFull);
    timelineTrialsToPush.push(cursor_off);
    //timelineTrialsToPush.push(prestim);
    timelineTrialsToPush.push(fixation);
    timelineTrialsToPush.push(dispCircle);
    // timelineTrialsToPush.push(visualSearchDisp(jitterCoords_x,jitterCoords_y));
    timelineTrialsToPush.push(isi);
    timelineTrialsToPush.push(cursor_on);
    timelineTrialsToPush.push(personSlider);

}