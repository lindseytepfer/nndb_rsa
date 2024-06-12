import React from "react";

export const Consent = ( { pageEvent } ) => {

    return(
        <div className="consent-form">
            <h1>CONSENT TO TAKE PART IN RESEARCH</h1>
            <h2>Dartmouth College</h2>
            <h3>Study Title: Perceptions of conflict in film media</h3>
            <p><strong>Principal Investigator: Mark Allen Thornton</strong></p>
            <p> 
                <strong>You are being asked to take part in a research study. Taking part in research is voluntary.</strong>
            </p>

            <p>
                It is your choice whether or not to participate in this research.  If you choose to participate, you may change your mind and leave the study at any time.  Refusal to participate or stopping your participation will involve no penalty or loss of benefits to which you are otherwise entitled. If at any time before the completion of the study you close the experiment window or tab, this will be treated as withdrawn consent and any data you have provided will be discarded.            
            </p>
            
            <p>
                <strong>Study Summary</strong><br/>
                This study aims to understand how people perceive on-screen conflict, tension, and violence in movies, as well as how positive or negative the media makes them feel.<br/><br/>

                The risk of participating in this study is minimal, no greater than what you would experience in the course of everyday internet use for an equivalent period of time. Your participation in this study is completely voluntary. You may choose not to participate. You may withdraw at any time during the study without penalty by simply closing this tab or window of your web browser.            
            </p>
            
            <p>
                <strong>What is the purpose of this study?</strong><br/>
                The purpose of this study is to understand how people label moments in film media as interpersonally tense, conflicting, or violent, and how positive or negative these moments make people feel. We hope to use these labels to perform a subsequent analysis on previously collected neural data by others from participants who watched these same films. We hope to learn whether interpersonal conflict, tension, and violence provokes distinct patterns of neural activity.             
            </p>
            
            <p>
                <strong>Will you benefit from taking part in this study?</strong><br/>
                You will not personally benefit from being in this research study.
            </p>

            <p>
                <strong>What does this study involve?</strong><br/>
                Your participation in this study will last approximately 10 minutes. Across the course of the experiment, you will watch 10 movie clips from 10 different movies. The movie clips are between 15-25 seconds long. After you watch the clip, you will then be asked to answer several questions. The questions include whether you’ve seen the movie before, whether the clip contained a social interaction, how many individuals were in the clip, how many of them were interacting, and how much tension, conflict, and violence was present in the clip. You will make your responses using your keyboard/mouse or touchscreen. At the end of the study, you will be asked to complete a brief questionnaire about your demographics.             
            </p>
            
            <p>
                <strong>What are the risks involved with being enrolled in this study?</strong> <br/>
                We anticipate no risks associated with this study. The stimuli presented in this study may contain depictions of conflict or violence but does not pose any greater risk than what an individual may assume when watching a Hollywood movie with an R rating. For example, some clips feature gun use, arguments with shouting, swear words, and depictions of death (e.g., a quick glimpse of an actor playing as a dead body). These clips do NOT feature any sexual violence or gore.            
            </p>
            
            <p>
                <strong>Will my deidentified data be shared with the public for scientific purposes?</strong><br/>
                Yes, for scientific purposes, the data collected in this project will be shared on Open Science Framework and freely accessible to the public for scientific purposes. We will not record identifying information from you, such as names, contact information, or IP addresses. We may temporarily retain your Microsoft Cloud Research ID to ensure that we can pay you if you encounter a technical issue. However, this information will be deleted after data collection is complete and will not be shared.             
            </p>

            <p>
                <strong>Will you be paid to take part in this study?</strong><br/>
                Yes. You will be paid $7.50/hr. This payment will be made electronically via the online platform you are using to complete the study. 
            </p>
            
            <p>
                <strong>Whom should you call with questions about this study?</strong><br/>
                The leader of the research team for this study is Mark Thornton, who can be reached at mark.a.thornton@dartmouth if you have questions, concerns, or complaints, if you would like to talk to the research team, if you think the research has harmed you, or if you wish to withdraw from the study.
            </p>

            <h2>CONSENT</h2>  
            <p>By pressing the button below, you agree that:</p>
            <p>
                <strong>
                1. You agree to take part in this research.<br/>
                2. You feel like you understand what you are agreeing to.<br/>
                3. You know you are free to withdrawal at any time.<br/>
                </strong>
            </p>

            <div>
                <p>When you are ready to begin, please press the button below:</p>
                <button className="advance-button" onClick={pageEvent}>continue</button>
            </div>
        </div>
    );
};