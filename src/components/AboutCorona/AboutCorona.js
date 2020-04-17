import React from 'react';

import classes from './AboutCorona.module.css';

const AboutCorona = () => (
    <div className={classes.Container}>
        <div className={classes.DataContainer}>
            <h1 className={classes.HeadingCorona}>What is coronavirus?</h1>
            <p className={classes.para}>
                Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.

                Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.

                The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. 

                The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).

                At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available.
            </p>
        </div>

        <div className={classes.DataContainer}>
            <h1 className={classes.HeadingCorona}>what is prevention from corona?</h1>
             <ul className={classes.Ul}>
                <li>Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.</li>
                <li>Maintain at least 1 metre distance between you and people coughing or sneezing.</li>
                <li>Avoid touching your face.</li>
                <li>Cover your mouth and nose when coughing or sneezing.</li>
                <li>Stay home if you feel unwell.</li>
                <li>Refrain from smoking and other activities that weaken the lungs.</li>
                <li>Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people.</li>
            </ul>
        </div>

        <div className={classes.DataContainer}>
            <h1 className={classes.HeadingCorona}>what are the symptoms of coronavirus?</h1>
            <p className={classes.para}>
                
                The COVID-19 virus affects different people in different ways.  COVID-19 is a respiratory disease and most infected people will develop mild to moderate symptoms and recover without requiring special treatment.  People who have underlying medical conditions and those over 60 years old have a higher risk of developing severe disease and death.
            </p>

                <p className={classes.para}>Common symptoms include:</p>
                <ul className={classes.Ul}>
                    <li>fever</li>
                    <li>tiredness</li>
                    <li>dry cough.</li>
                </ul>
                    
                <p className={classes.para}>Other symptoms include:</p>
                <ul className={classes.Ul}>
                    <li>shortness of breath</li>
                    <li>aches and pains</li>
                    <li>sore throat</li>
                    <li>and very few people will report diarrhoea, nausea or a runny nose.</li>
                </ul>

                <p className={classes.para}>    
                People with mild symptoms who are otherwise healthy should self-isolate and contact their medical provider or a COVID-19 information line for advice on testing and referral.
                </p>
                <p className={classes.para}>
                People with fever, cough or difficulty breathing should call their doctor and seek medical attention.
            </p>
        </div>
    </div>
);

export default AboutCorona;