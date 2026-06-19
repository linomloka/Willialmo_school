import PropTypes from 'prop-types';

function HomePage({language}) {
    return (
        <section className="section">
            <div className="section_head">
                <h1>
                    {language === "EN" ? "Welcome!" : "Karibu!"} <span className="school_head">{language === "EN" ? "WILLIALMO SCHOOL" : "WILLIALMO SCHOOL"}</span>
                </h1>
                <h2>{language === "EN" ? "This is where talents and innovations meet conducive environment and advanced technology" :
                                         "Mahali ambapo vipaji na bunifu zinakutana na mazingira mazuri na teknolojia bora."}
                </h2>
            </div>

            <div className="min_section">
                <div className="min_section1">
                    <div className="min_section1_div1">
                        <h2>{language === "EN" ? "Good working environment" :
                                                 "Mazingira bora"}
                        </h2>
                        <p>{language === "EN" ? "Large classrooms available with enough space to ensure comfort, concentration, and effective learning for all students." :
                                                "Madarasa makubwa yenye nafasi ya kutosha kuleta utulivu, umakini na ujifunzaji bora kwa wanafunzi wote."}
                        </p>
                        <button className="min_section_buttons">{language === "EN" ? "Learn More" : "Jua zaidi"}</button>
                    </div>

                    <div className="min_section1_div2">
                        <h2>{language === "EN" ? "Best teachers" : "Walimu bora"}</h2>
                        <p>{language === "EN" ? "Specialists in transfering knowledge through clear teaching methods and increase understanding through practical sessions." :
                                                "Wabobezi katika kutoa maarifa kupitia njia rahisi za ufundishaji na kuongeza uelewa kupitia vipindi vya matendo."}
                        </p>
                        <button className="min_section_buttons">{language === "EN" ? "Learn More" : "Jua zaidi"}</button>
                    </div>
                </div>

                <div className="min_section2">
                    <div className="min_section2_div1">
                        <h2>{language === "EN" ? "Sports" : "Michezo"}</h2>
                        <p>{language === "EN" ? "Discovering talents of our students in every aspects and develop them, to enhance good teamwork and better health so as to make them enjoy playing." :
                                                "Ugunduzi wa vipaji vya watoto wetu kwenye kila nyanja na kuwaboresha, kuimarisha umoja na afya ili kuwafanya kufurahia kucheza."}
                        </p>
                        <button className="min_section_buttons">{language === "EN" ? "Learn More" : "Jua zaidi"}</button>
                    </div>

                    <div className="min_section2_div2">
                        <h2>{language === "EN" ? "Advanced technology" : "Teknolojia bora"}</h2>
                        <p>{language === "EN" ? "Inspires studets to change the world by acquiring knowledge as well as help them to think out of the box and be a game changers of nowadays." :
                                                "Kuhimiza wanafunzi kubadili dunia kwa kupata maarifa vilevile kuwasaidia kufikiri vitu vipya na kuwa wagunduzi wa siku za leo."}
                        </p>
                        <button className="min_section_buttons">{language === "EN" ? "Learn More" : "Jua zaidi"}</button>
                    </div>
                </div>

                         {/*---------------- SERVICES & FEES SECTION ----------------- */}
                <div className="main_services_section">
                    <div className="h2_services_section"> 
                        <h2>
                            {language === "EN" ? "We receive students for:" : 
                                                 "Tunapokea wanafunzi kwa ajili: "
                            } 
                        </h2>
                    </div>

                    <div className="services_sections"> 
                        <div className="services_section1">
                            <h2>
                                {language === "EN" ? "Nursery education" :
                                                     "Elimu ya Awali"
                                }
                            </h2>
                            <div>
                                <p>
                                    {language === "EN" ? "Children with age of 6 months to 5 years." :
                                                         "Watoto wenye umri wa miezi 6 hadi miaka 5."
                                    }
                                </p>
                                <p>
                                    {language === "EN" ? "We provide day care for little children, make the feel home and secured as well as improve their learning and social abilities." :
                                                         "Tunatoa malezi kwa watoto wadogo, kuwafanya wajihisi wapo nyumbani vilevile kuboresha uwezo wao wa kujifunza na kijamii."
                                    }
                                </p>
                            </div>
                        </div>

                        <div className="services_section2">
                            <h2>
                                {language === "EN" ? "Primary education" :
                                                     "Elimu ya Msingi"
                                }
                            </h2>
                            <div>
                                <p>
                                    {language === "EN" ? "Children with age of 6 years." :
                                                        "Watoto wenye umri wa miaka 6."
                                    }
                                </p>
                                <p>
                                    {language === "EN" ? "We provide quality primary education to students, considering their understanding, make them enjoy their studies as well as other school activities." :
                                                         "Tunatoa elimu bora ya msingi kwa wanafunzi, tukizingatia uelewa wao, kuwafanya wafurahie masomo yao na kazi nyingine shuleni."} 
                                </p>
                            </div>
                        </div>

                        <div className="services_section3">
                            <h2>
                                {language === "EN" ? "Secondary education" :
                                                     "Elimu ya Sekondari"
                                }
                            </h2>
                            <div>
                                <p>
                                    {language === "EN" ? "Students who have completed their primary education." :
                                                         "Wanafunzi waliomaliza elimu ya msingi."
                                    }
                                </p>
                                <p>
                                    {language === "EN" ? "We involve much practicals so as to enhance our students' understanding preparing for their advance or university education." :
                                                         "Tunajumuisha majaribio mengi ili kuboresha uelewa wa wanafunzi wetu na kuwaandaa kwa masomo ya elimu ya juu na chuo."
                                    }
                                </p>
                            </div>
                        </div>

                        <div className="services_section4">
                            <h2>
                                {language === "EN" ? "Advanced education" :
                                                     "Elimu ya juu"
                                }
                            </h2>
                            <div>
                                <p>
                                    {language === "EN" ? "Students who have completed their secondary education." :
                                                         "Wanafunzi waliomaliza elimu ya sekondari."
                                    }
                                </p>
                                <p>
                                    {language === "EN" ? "We as best school, teach our students in best way as well as improve thier social skills, preparing for their future." :
                                                         "Sisi kama shule bora, tunafundisha wanafunzi wetu kwenye njia bora vilevile kuongeza ujuzi wao wa kijamii, kuwaandaa kwa maisha yajayo."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

HomePage.propTypes = {
    language: PropTypes.string.isRequired
};

export default HomePage 