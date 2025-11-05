/*
===============================================================
Defining Parameter Variables
===============================================================
*/

// people from https://osf.io/egj7c/overview


var stimFolder = 'src/assets/stimuli/peoples/cropped_peoples/'

var PEOPLE = [
    'AF221.png', 'AF232.png', 'AF254.png', 'AM207.png', 'AM236.png',
    'AM259.png', 'BF11.png', 'BF19.png', 'BF56.png', 'BM11.png',
    'BM21.png', 'BM84.png', 'WF23.png', 'WF70.png', 'WF106.png',
    'WM1.png', 'WM10.png', 'WM64.png',
]; 

// added parameters for visual search
const cols = 3;
const rows = 3;
var MIN_SCALE = 10; // 30%
var MAX_SCALE = 90; // 150%

//slider variables
const slider_max = 200
const slider_min = 50

var runIntro = false;
var runInstr = false;
var runExpt = true;
var runClose = true;
var runPreload = true;

// Defining Core Variables that remain constant
var PRESTIM_DISP_TIME = 800;
var FIXATION_DISP_TIME = 500;

// Variables for Participant Information
var estTotalRunTime = 5;
var estDollars = 0.9;
var participantType = 'prolific';
var completionCode = 'C4MF2IV1';
var prolific_url = 'https://app.prolific.co/submissions/complete?cc='+completionCode;

// WAVE Backend Configuration
var waveBackendUrl = 'https://wave-backend-production-8781.up.railway.app';
// var waveBackendUrl = 'http://localhost:8000';  // For local development

// initializing variables
var timelinebase = [];
var timelineintro = [];
var timelineinstr = [];
var timelineexpt = [];
var timelineclose = [];
var forPreload = [];
var full_check = false;
var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
var h =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

// setting display image width
var origWidth = 300;
var origHeight = 300;
var imgWidth = 200; // your desired display img width
var imgHeight = (imgWidth / origWidth) * origHeight;


