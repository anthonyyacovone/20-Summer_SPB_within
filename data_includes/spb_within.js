/*
-- Speeded Plausibility and Bias Adults: SPBa -- 
   By: Anthony Yacovone (10/16/18) 
   Built from the Toronto-Psycholinguistics-Experiments Template 

*/

// Determine the sequence of the experiment 
var shuffleSequence = seq("setcounter","consent", "demo","instructions", "readyPractice",
                           "sep_practice", "practice1",
                           "sep_practice", "practice2",
                           "sep_practice", "practice3", "readyTest", "readyTest", "sep", sepWith("sep", rshuffle(startsWith("spba"), startsWith("f"))),"debrief","exit");
   

// Define experiment-specific variables 
                                                                  // sets the list number in the Latin Square design
var practiceItemTypes = ["sep_practice", "practice1", 
                           "sep_practice", "practice2", 
                           "sep_practice", "practice3"];  // determines which items have the blue "practice" label 
var centerItems = true;                                                                     // centers the presentation of items (not necessary for this experiment)
var showProgressBar = false;

// Define the defaults for the controller in this experiment (no need for the DashedSentence, Acceptability and DashedAcceptabilty Judgments
var defaults = [
    "Separator", {transfer: 2000, normalMessage: "Please get ready to listen to the next sentence.", errorMessage: "Wrong. Please wait for the next sentence."},
    "Message", {hideProgressBar: false, countsForProgressBar: true},
    "Form", {
        hideProgressBar: false,
        continueOnReturn: true,
        saveReactionTime: true,
        countsForProgressBar: true,
        continueMessage: null}, 
    
    "FlashSentence", {timeout: 1000, countsForProgressBar: false},
    "AY_Form", {continueOnReturn: true, continueMessage: null, hideProgressBar: true},
];



// Define the experimental stimuli, this includes both target and filler trials 

var items = [
    
    ["setcounter", "__SetCounter__", { }],


    //ends when key is press
    ["sep_practice", "Message", {html: "<i>Get ready for the practice sentence!</i>", transfer: 3000}, 
            "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}],
    
    ["sep", "Message", {html: "<i>Get ready for the next sentence!</i>", transfer: 3000}, 
            "FlashSentence", {s: "3..."},"FlashSentence", {s: "2..."},"FlashSentence", {s: "1..."}],


    
    ["consent", "AY_Form", {consentRequired: true, html: {include: "harvard_consent_2019.html" }} ],
    ["demo", "AY_Form", {consentRequired: true, html: {include: "harvard_demographics.html" }} ],
    ["debrief", "AY_Form", {consentRequired: true, continueMessage:null, html: {include: "harvard_debrief.html" }} ],
    ["exit", "AY_Form", {consentRequired: true, continueMessage:"Submit your answers here!", html: {include: "exit.html" }} ],
    ["instructions", "AY_Form", {consentRequired: true, continueMessage:null, html: {include: "instructions1.html" }} ],
    ["pre-practice_instructions", "AY_Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "instructions2.html" }} ],


    /*
    ===================
    INTRODUCTION
    Can include files for Questionnaires, consent forms etc...
    ===================
    */
    
    ["readyPractice", "Message", {html: "<center><b>You are about to start the practice phase!</b> Make sure to turn up the volume. Press 'Enter' when ready to start.</center>", transfer: 'keypress'}],

    ["readyPractice", "Message", {html: "<center><b>You are about to start the practice phase!</b> Make sure to turn up the volume. Press 'Enter' when ready to start.</center>", transfer: 'keypress'}],

    /*
    ===================
    TRAINING: WITHOUT REPEATS
    ===================
    */
   
      ["practice1",
                             "Message", { html: { include: 'p1_noRepeat.html' }, transfer: 5000 },
                             "Form", {html: 'What did Parker send the monkey?: <input type="text" name="norepeat1" class="obligatory" spellcheck="value">', 
                                      validators: { norepeat1: function (s) { if (s.match(/[aA] present[.!?]? *$/)) return true;       // the input needs to be letters (at least 2)
                                                                              else return "Nice try! The correct answer is just 'A present'. Remember, some answers require only some information to be correct!";}}, },],
      
                                                           
                                                                                                                                                            
      ["practice2", 
                             "Message", { html: { include: 'p2_noRepeat.html' }, transfer: 5000 },
                             "Form", {html: 'What did Sarah do before the giraffe\'s party?: <input type="text" name="norepeat2" class="obligatory" spellcheck="value">', 
                                      validators: { norepeat2: function (s) { if (s.match(/[uU]se[d]? a wrench to fix the [tT][vV][.!?]?/)) return true;       // the input needs to be letters (at least 2)
                                                                              else return "Make sure to provide a complete answer! The correct answer is 'Use a wrench to fix the TV'. Remember, some answers require more information to be correct!";}}, },],  
                                
                                                                                 
                                                                                  
                                                                                 
                                                                                  
      ["practice3", 
                             "Message", { html: { include: 'p3_noRepeat.html' }, transfer: 5000 },
                             "Form", {html: 'Who did Michael want to ask about the midterm?: <input type="text" name="norepeat3" class="obligatory" spellcheck="value">', 
                                      validators: { norepeat3: function (s) { if (s.match(/[tT]he rabbit from school[.!?]?/)) return true;       // the input needs to be letters (at least 2)
                                                                              else return "Make sure to provide a complete answer! The correct answer is 'The rabbit from school'";}}, },],
                                                    
                                                                                  
      ["readyTest", "Message", {html: "<center><b>You are about to start the REAL STUDY!</b> Make sure to turn up the volume. Press 'Enter' when ready to start.</center>", transfer: 'keypress'}],

                                                                                  

     /*
    ===================
    TEST PHASE: 
     
     SPBA: 
     HO = High Plausibility, Original Speed 
     HF = High Plausibility, Fast Speed 
     LO = Low Plausibility, Original Speed 
     LF = Low Plausibilityk, Fast Speed
     
     Fillers:
     fill-o = filler at original speed 
     fill-h = filler at fast speed
     
    ===================
    */
                                                                                  

     
// TARGET 1 (Instrument-biased):
    
     [["spba-ho-instr",1],  
                     "Message", { html: { include: 'audio_Inst_H1.html' }, transfer: 5000 },
                     "Form", {html: 'What did Anthony brush?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],

     [["spba-lo-instr",1],  
                     "Message", { html: { include: 'audio_Inst_L1.html' }, transfer: 5000 },
                     "Form", {html: 'What did Anthony brush?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],
// TARGET 2 (Instrument-biased):
    
     [["spba-ho-instr",2],  
                     "Message", { html: { include: 'audio_Inst_H2.html' }, transfer: 5000 },
                     "Form", {html: 'What did Briana clean?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],

     [["spba-lo-instr",2],  
                     "Message", { html: { include: 'audio_Inst_L2.html' }, transfer: 5000 },
                     "Form", {html: 'What did Briana clean?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],
      
// TARGET 3 (Instrument-biased):
    
     [["spba-ho-instr",3],  
                     "Message", { html: { include: 'audio_Inst_H3.html' }, transfer: 5000 },
                     "Form", {html: 'What did Cameron cover?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],

     [["spba-lo-instr",3],  
                     "Message", { html: { include: 'audio_Inst_L3.html' }, transfer: 5000 },
                     "Form", {html: 'What did Cameron cover?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],
      
// TARGET 4 (Instrument-biased):
    
     [["spba-ho-instr",4],  
                     "Message", { html: { include: 'audio_Inst_H4.html' }, transfer: 5000 },
                     "Form", {html: 'What did Diane feed?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],

     [["spba-lo-instr",4],  
                     "Message", { html: { include: 'audio_Inst_L4.html' }, transfer: 5000 },
                     "Form", {html: 'What did Diane feed?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],
      
// TARGET 5 (Instrument-biased):
    
     [["spba-ho-instr",5],  
                     "Message", { html: { include: 'audio_Inst_H5.html' }, transfer: 5000 },
                     "Form", {html: 'What did Evelyn poke?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],

     [["spba-lo-instr",5],  
                     "Message", { html: { include: 'audio_Inst_L5.html' }, transfer: 5000 },
                     "Form", {html: 'What did Evelyn poke?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],
      
// TARGET 6 (Instrument-biased):
    
     [["spba-ho-instr",6],  
                     "Message", { html: { include: 'audio_Inst_H6.html' }, transfer: 5000 },
                     "Form", {html: 'What did Fred tickle?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],

     [["spba-lo-instr",6],  
                     "Message", { html: { include: 'audio_Inst_L6.html' }, transfer: 5000 },
                     "Form", {html: 'What did Fred tickle?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],

      
// TARGET 1 (Modifier-biased):
    
     [["spba-ho-mod",7],  
                     "Message", { html: { include: 'audio_Mod_H1.html' }, transfer: 5000 },
                     "Form", {html: 'What did Alex find?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],

     [["spba-lo-mod",7],  
                     "Message", { html: { include: 'audio_Mod_L1.html' }, transfer: 5000 },
                     "Form", {html: 'What did Alex find?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],
// TARGET 2 (Modifier-biased):
    
     [["spba-ho-mod",8],  
                     "Message", { html: { include: 'audio_Mod_H2.html' }, transfer: 5000 },
                     "Form", {html: 'What did Brian listen to?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],

     [["spba-lo-mod",8],  
                     "Message", { html: { include: 'audio_Mod_L2.html' }, transfer: 5000 },
                     "Form", {html: 'What did Brian listen to?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],
      
// TARGET 3 (Modifier-biased):
    
     [["spba-ho-mod",9],  
                     "Message", { html: { include: 'audio_Mod_H3.html' }, transfer: 5000 },
                     "Form", {html: 'What did Cathy look at?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],

     [["spba-lo-mod",9],  
                     "Message", { html: { include: 'audio_Mod_L3.html' }, transfer: 5000 },
                     "Form", {html: 'What did Cathy look at?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],
      
// TARGET 4 (Modifier-biased):
    
     [["spba-ho-mod",10],  
                     "Message", { html: { include: 'audio_Mod_H4.html' }, transfer: 5000 },
                     "Form", {html: 'What did Dan sing to?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],

     [["spba-lo-mod",10],  
                     "Message", { html: { include: 'audio_Mod_L4.html' }, transfer: 5000 },
                     "Form", {html: 'What did Dan sing to?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],
      
// TARGET 5 (Modifier-biased):
    
     [["spba-ho-mod",11],  
                     "Message", { html: { include: 'audio_Mod_H5.html' }, transfer: 5000 },
                     "Form", {html: 'What did Eric talk to?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],

     [["spba-lo-mod",11],  
                     "Message", { html: { include: 'audio_Mod_L5.html' }, transfer: 5000 },
                     "Form", {html: 'What did Eric talk to?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],
      
// TARGET 6 (Modifier-biased):
    
     [["spba-ho-mod",12],  
                     "Message", { html: { include: 'audio_Mod_H6.html' }, transfer: 5000 },
                     "Form", {html: 'What did Frankie yell at?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],

     [["spba-lo-mod",12],  
                     "Message", { html: { include: 'audio_Mod_L6.html' }, transfer: 5000 },
                     "Form", {html: 'What did Frankie yell at?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
                              validators: { answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                                                   else return "Bad value for \u2018this question\u2019";}}, }, ],
      
      
      
      
// Filler 1:
    
     [["f-o",13], 
      "Message", { html: {include: 'audio_filler1.html'}, transfer: 5000},
      "Form", {html: 'What did Amy bring the lonely fish?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
   
// Filler 2:
    
     [["f-o",14], 
      "Message", { html: {include: 'audio_filler2.html'}, transfer: 5000},
      "Form", {html: 'What did Andrew paint the scary snake?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
   
// Filler 3:
    
     [["f-o",15], 
      "Message", { html: {include: 'audio_filler3.html'}, transfer: 5000},
      "Form", {html: 'Where was the large, leafy plant?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
// Filler 4:
    
     [["f-o",16], 
      "Message", { html: {include: 'audio_filler4.html'}, transfer: 5000},
      "Form", {html: 'Where was the long, silky dress?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
// Filler 5:
    
     [["f-o",17], 
      "Message", { html: {include: 'audio_filler5.html'}, transfer: 5000},
      "Form", {html: 'Who danced?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
     
// Filler 6:
    
     [["f-o",18], 
      "Message", { html: {include: 'audio_filler6.html'}, transfer: 5000},
      "Form", {html: 'Who cooked?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
     
// Filler 7:
    
     [["f-o",19], 
      "Message", { html: {include: 'audio_filler7.html'}, transfer: 5000},
      "Form", {html: 'What did Dina write?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
    
// Filler 8:
    
     [["f-o",20], 
      "Message", { html: {include: 'audio_filler8.html'}, transfer: 5000},
      "Form", {html: 'What did Derek type?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
     
// Filler 9:
    
     [["f-o",21], 
      "Message", { html: {include: 'audio_filler9.html'}, transfer: 5000},
      "Form", {html: 'What did Ellen feed?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
    
// Filler 10:
    
     [["f-o",22], 
      "Message", { html: {include: 'audio_filler10.html'}, transfer: 5000},
      "Form", {html: 'What did Emily burp?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
     
// Filler 11:
    
     [["f-o",23], 
      "Message", { html: {include: 'audio_filler11.html'}, transfer: 5000},
      "Form", {html: 'Who laughed at the frog\'s jokes?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
     
// Filler 12:
    
     [["f-o",24], 
      "Message", { html: {include: 'audio_filler12.html'}, transfer: 5000},
      "Form", {html: 'Who scoffed at the remarks that the fox made?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],


      
// Filler 13:
    
     [["f-o",13], 
      "Message", { html: {include: 'audio_filler13.html'}, transfer: 5000},
      "Form", {html: 'What did George use to buy food?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
   
// Filler 14:
    
     [["f-o",14], 
      "Message", { html: {include: 'audio_filler14.html'}, transfer: 5000},
      "Form", {html: 'What did Georgia use to get discounted school supplies?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
   
// Filler 15:
    
     [["f-o",15], 
      "Message", { html: {include: 'audio_filler15.html'}, transfer: 5000},
      "Form", {html: 'What did Haley hear?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
// Filler 16:
    
     [["f-o",16], 
      "Message", { html: {include: 'audio_filler16.html'}, transfer: 5000},
      "Form", {html: 'What did Harry hear?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
// Filler 17:
    
     [["f-o",17], 
      "Message", { html: {include: 'audio_filler17.html'}, transfer: 5000},
      "Form", {html: 'What did Ian love to do?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
     
// Filler 18:
    
     [["f-o",18], 
      "Message", { html: {include: 'audio_filler18.html'}, transfer: 5000},
      "Form", {html: 'What did Izzy like to do?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
     
// Filler 19:
    
     [["f-o",19], 
      "Message", { html: {include: 'audio_filler19.html'}, transfer: 5000},
      "Form", {html: 'Who had a plan?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
    
// Filler 20:
    
     [["f-o",20], 
      "Message", { html: {include: 'audio_filler20.html'}, transfer: 5000},
      "Form", {html: 'Who had a party?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
     
// Filler 21:
    
     [["f-o",21], 
      "Message", { html: {include: 'audio_filler21.html'}, transfer: 5000},
      "Form", {html: 'What did Kristy grow tired of?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
    
// Filler 22:
    
     [["f-o",22], 
      "Message", { html: {include: 'audio_filler22.html'}, transfer: 5000},
      "Form", {html: 'What did Ken grow sick of?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
     
// Filler 23:
    
     [["f-o",23], 
      "Message", { html: {include: 'audio_filler23.html'}, transfer: 5000},
      "Form", {html: 'When did Laura go to the store?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    
     
// Filler 24:
    
     [["f-o",24], 
      "Message", { html: {include: 'audio_filler24.html'}, transfer: 5000},
      "Form", {html: 'When did Lenny travel to the beach?: <input type="text" name="answer" class="obligatory" spellcheck="value">', 
      validators: {
        answer: function (s) { if (s.match(/^(([a-zA-Z]+\s?'?-?[a-zA-Z]+)\s*)+$/)) return true;       // the input needs to be letters (at least 2)
                                else return "Bad value for \u2018this question\u2019";}}, }, ],
    


    ];
