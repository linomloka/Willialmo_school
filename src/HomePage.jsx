
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
                    <h2 className="h2_services_section">We receive students for: </h2>
                    <div>
                        <h2>Nursery education</h2>
                        <p>Children with age of 6 months to 5 years.</p>
                        <p>We also provide day care for little children, make the feel home and secured as well as improve their learning and social abilities.</p>
                    </div>

                    <div>
                        <h2>Primary education</h2>
                        <p>Children with age of 6 years.</p>
                        <p>We provide quality primary education to students, considering their understanding, make them enjoy their studies as well as other school activities. </p>
                    </div>

                    <div>
                        <h2>Secondary education</h2>
                        <p>Children who have completed their primary education.</p>
                        <p>We involve much practicals so as to enhance our students' understanding preparring for their advance or university education.</p>
                    </div>

                    <div>
                        <h2>Advanced education</h2>
                        <p>Children who have completed their secondary.</p>
                        <p>We as best school, teach our students in best way as well as improve thier social skills, preparing for their future.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default HomePage 