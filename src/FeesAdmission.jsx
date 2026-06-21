import PropTypes from 'prop-types';
import styles from './css files/FeesAdmission.module.css';

function FeesAdmission({ language }) {
  return (
    <section className={styles.feesSection}>
      <div className={styles.feesHeader}>
        <h1>
          {language === "EN" ? "Fees & Admission" : "Ada na Kuingizwa"}
        </h1>
        <p>
          {language === "EN"
            ? "Clear information about our fees structure and admission process."
            : "Habari nyingi kuhusu muundo wetu wa ada na mchakato wa kuingizwa."}
        </p>
      </div>

      <div className={styles.feesContent}>
        {/* Fees Table - Nursery */}
        <div className={styles.programSection}>
          <h2>{language === "EN" ? "Nursery Fees (Per Term)" : "Ada ya Chekechea (Kwa Muhula)"}</h2>
          <div className={styles.tableContainer}>
            <table className={styles.feesTable}>
              <thead>
                <tr>
                  <th>{language === "EN" ? "Class" : "Darasa"}</th>
                  <th>{language === "EN" ? "Term Fees" : "Ada ya Muhula"}</th>
                  <th>{language === "EN" ? "Registration" : "Kujiandikisha"}</th>
                  <th>{language === "EN" ? "Total Per Year" : "Jumla Kwa Mwaka"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{language === "EN" ? "Baby Class" : "Darasa la Mtoto"}</td>
                  <td>450,000 TZS</td>
                  <td>100,000 TZS</td>
                  <td>1,450,000 TZS</td>
                </tr>
                <tr>
                  <td>{language === "EN" ? "Middle Class" : "Darasa la Kati"}</td>
                  <td>500,000 TZS</td>
                  <td>100,000 TZS</td>
                  <td>1,600,000 TZS</td>
                </tr>
                <tr>
                  <td>{language === "EN" ? "Top Class" : "Darasa la Juu"}</td>
                  <td>550,000 TZS</td>
                  <td>100,000 TZS</td>
                  <td>1,750,000 TZS</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles.note}>
            {language === "EN"
              ? "*4 terms per year. Registration is one-time on first admission."
              : "*Muhula 4 kwa mwaka. Kujiandikisha ni mara moja katika kuingizwa kwa kwanza."}
          </p>
        </div>

        {/* Fees Table - Primary */}
        <div className={styles.programSection}>
          <h2>{language === "EN" ? "Primary Fees (Per Term)" : "Ada ya Msingi (Kwa Muhula)"}</h2>
          <div className={styles.tableContainer}>
            <table className={styles.feesTable}>
              <thead>
                <tr>
                  <th>{language === "EN" ? "Class" : "Darasa"}</th>
                  <th>{language === "EN" ? "Term Fees" : "Ada ya Muhula"}</th>
                  <th>{language === "EN" ? "Registration" : "Kujiandikisha"}</th>
                  <th>{language === "EN" ? "Total Per Year" : "Jumla Kwa Mwaka"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{language === "EN" ? "Class 1-2" : "Darasa 1-2"}</td>
                  <td>650,000 TZS</td>
                  <td>150,000 TZS</td>
                  <td>2,750,000 TZS</td>
                </tr>
                <tr>
                  <td>{language === "EN" ? "Class 3-4" : "Darasa 3-4"}</td>
                  <td>750,000 TZS</td>
                  <td>150,000 TZS</td>
                  <td>3,150,000 TZS</td>
                </tr>
                <tr>
                  <td>{language === "EN" ? "Class 5-6" : "Darasa 5-6"}</td>
                  <td>850,000 TZS</td>
                  <td>150,000 TZS</td>
                  <td>3,550,000 TZS</td>
                </tr>
                <tr>
                  <td>{language === "EN" ? "Class 7 (Final)" : "Darasa 7 (Mwisho)"}</td>
                  <td>950,000 TZS</td>
                  <td>150,000 TZS</td>
                  <td>3,950,000 TZS</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles.note}>
            {language === "EN"
              ? "*Class 7 fees include NECTA exam registration and preparation materials."
              : "*Ada ya Darasa 7 inajumuisha kujiandikisha kwa NECTA na nyenzo za maandalizi."}
          </p>
        </div>

        {/* Additional Costs */}
        <div className={styles.additionalCosts}>
          <h2>{language === "EN" ? "Additional Costs" : "Ada za Ziada"}</h2>
          <div className={styles.costsGrid}>
            <div className={styles.costCard}>
              <h3>{language === "EN" ? "School Uniform" : "Sare ya Shule"}</h3>
              <p>300,000 - 500,000 TZS</p>
              <p className={styles.description}>
                {language === "EN" ? "Required for all students" : "Inatozamwa kwa wanafunzi wote"}
              </p>
            </div>

            <div className={styles.costCard}>
              <h3>{language === "EN" ? "Books & Stationery" : "Vitabu na Nyenzo"}</h3>
              <p>200,000 - 350,000 TZS</p>
              <p className={styles.description}>
                {language === "EN" ? "Per year, provided by school" : "Kwa mwaka, inayotolewa na shule"}
              </p>
            </div>

            <div className={styles.costCard}>
              <h3>{language === "EN" ? "Sports Uniform" : "Sare ya Michezo"}</h3>
              <p>100,000 - 150,000 TZS</p>
              <p className={styles.description}>
                {language === "EN" ? "For sports participation (optional)" : "Kwa ushiriki wa michezo (ikhtiyari)"}
              </p>
            </div>

            <div className={styles.costCard}>
              <h3>{language === "EN" ? "Lunch Program" : "Programu ya Chakula"}</h3>
              <p>50,000 TZS / month</p>
              <p className={styles.description}>
                {language === "EN" ? "Nutritious meals provided daily (optional)" : "Chakula cha kujenga mwili kutolewa kila siku (ikhtiyari)"}
              </p>
            </div>

            <div className={styles.costCard}>
              <h3>{language === "EN" ? "Transport (Optional)" : "Usafiri (Ikhtiyari)"}</h3>
              <p>100,000 - 200,000 TZS / month</p>
              <p className={styles.description}>
                {language === "EN" ? "School shuttle service available" : "Huduma ya shuttle ya shule inapatikana"}
              </p>
            </div>

            <div className={styles.costCard}>
              <h3>{language === "EN" ? "Extra-Curricular" : "Shughuli za Ziada"}</h3>
              <p>50,000 - 100,000 TZS</p>
              <p className={styles.description}>
                {language === "EN" ? "Music, art, coding, sports clubs" : "Nyimbo, sanaa, coding, vikundi vya michezo"}
              </p>
            </div>
          </div>
        </div>

        {/* Admission Process */}
        <div className={styles.admissionProcess}>
          <h2>{language === "EN" ? "Admission Process" : "Mchakato wa Kuingizwa"}</h2>
          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>{language === "EN" ? "Inquiry & School Tour" : "Maswali na Ziaramu ya Shule"}</h3>
              <p>
                {language === "EN"
                  ? "Contact the school office to schedule a tour and ask questions about our programmes."
                  : "Wasiliana na ofisi ya shule kuandaa ziaramu na kuuliza maswali kuhusu programu zetu."}
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>{language === "EN" ? "Application Form" : "Fomu ya Ombi"}</h3>
              <p>
                {language === "EN"
                  ? "Fill out the application form with student and parent information."
                  : "Jaza fomu ya ombi na habari ya mwanafunzi na mzazi."}
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>{language === "EN" ? "Entrance Assessment" : "Tathmini ya Kuingizwa"}</h3>
              <p>
                {language === "EN"
                  ? "Student sits for an assessment test in English, Swahili, and Mathematics."
                  : "Mwanafunzi hufanya mtihani wa tathmini katika Kiingereza, Kiswahili, na Hesabu."}
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>{language === "EN" ? "Parent Interview" : "Mahojiano ya Mzazi"}</h3>
              <p>
                {language === "EN"
                  ? "Meet with school leadership to discuss student needs and expectations."
                  : "Kutana na viongozi wa shule kujadili mahitaji na matarajio ya mwanafunzi."}
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>5</div>
              <h3>{language === "EN" ? "Admission Decision" : "Maamuzi ya Kuingizwa"}</h3>
              <p>
                {language === "EN"
                  ? "Receive admission decision via email/SMS within 1-2 weeks."
                  : "Pokea maamuzi ya kuingizwa kupitia barua pepe/SMS ndani ya wiki 1-2."}
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>6</div>
              <h3>{language === "EN" ? "Registration" : "Kujiandikisha"}</h3>
              <p>
                {language === "EN"
                  ? "Complete registration, pay fees, and collect enrollment documents."
                  : "Kamata kujiandikisha, lipa ada, na pokea nyaraka za kuingizwa."}
              </p>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className={styles.requirements}>
          <h2>{language === "EN" ? "Admission Requirements" : "Mahitaji ya Kuingizwa"}</h2>
          <div className={styles.requirementsGrid}>
            <div className={styles.requirementCard}>
              <h3>{language === "EN" ? "For Nursery" : "Kwa Chekechea"}</h3>
              <ul>
                <li>{language === "EN" ? "Birth certificate (copy)" : "Cheti cha kuzaliwa (nakala)"}</li>
                <li>{language === "EN" ? "Immunization records" : "Rekodi za chanjo"}</li>
                <li>{language === "EN" ? "Medical check-up report" : "Ripoti ya uchumi wa kimatibabu"}</li>
                <li>{language === "EN" ? "Parent identification" : "Kitambulisho cha mzazi"}</li>
              </ul>
            </div>

            <div className={styles.requirementCard}>
              <h3>{language === "EN" ? "For Primary" : "Kwa Msingi"}</h3>
              <ul>
                <li>{language === "EN" ? "Previous school report card" : "Kadi ya ripoti ya shule iliyopita"}</li>
                <li>{language === "EN" ? "Birth certificate (copy)" : "Cheti cha kuzaliwa (nakala)"}</li>
                <li>{language === "EN" ? "Medical check-up report" : "Ripoti ya uchumi wa kimatibabu"}</li>
                <li>{language === "EN" ? "Parent contact information" : "Habari ya wasiliano wa mzazi"}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className={styles.paymentMethods}>
          <h2>{language === "EN" ? "Payment Methods" : "Njia za Kulipia"}</h2>
          <p>
            {language === "EN"
              ? "We accept payments through multiple convenient channels:"
              : "Tunakubali malipo kupitia njia nyingi za rahisi:"}
          </p>
          <div className={styles.paymentGrid}>
            <div className={styles.paymentOption}>
              <h3>{language === "EN" ? "M-Pesa" : "M-Pesa"}</h3>
              <p>{language === "EN" ? "Direct mobile money transfer" : "Uhamishaji wa pesa wa simu"}</p>
            </div>
            <div className={styles.paymentOption}>
              <h3>{language === "EN" ? "Bank Transfer" : "Uhamishaji wa Benki"}</h3>
              <p>{language === "EN" ? "Direct bank deposit" : "Kumweka pesa moja kwa moja kwenye benki"}</p>
            </div>
            <div className={styles.paymentOption}>
              <h3>{language === "EN" ? "Cash" : "Fedha"}</h3>
              <p>{language === "EN" ? "Direct payment at school office" : "Mlipo wa kutumia fedha kwenye ofisi ya shule"}</p>
            </div>
            <div className={styles.paymentOption}>
              <h3>{language === "EN" ? "Installments" : "Ada za Sehemu"}</h3>
              <p>{language === "EN" ? "Flexible payment plans available" : "Mipango rahisi ya kulipa inapatikana"}</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className={styles.contactCTA}>
          <h2>{language === "EN" ? "Have Questions?" : "Una Maswali?"}</h2>
          <p>
            {language === "EN"
              ? "Contact our admissions team for more information about fees and admission."
              : "Wasiliana na timu yetu ya kuingizwa kwa habari zaidi kuhusu ada na kuingizwa."}
          </p>
          <p className={styles.contactInfo}>
            {language === "EN" ? "Phone: " : "Simu: "}
            <strong>+255 747 945 986</strong>
          </p>
          <p className={styles.contactInfo}>
            {language === "EN" ? "Email: " : "Barua pepe: "}
            <strong>linoxmloka@gmail.com</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

FeesAdmission.propTypes = {
  language: PropTypes.string.isRequired
};

export default FeesAdmission;
