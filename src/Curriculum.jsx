import PropTypes from 'prop-types';
import styles from './css files/Curriculum.module.css';

function Curriculum({ language }) {
  return (
    <section className={styles.curriculumSection}>
      <div className={styles.curriculumHeader}>
        <h1>
          {language === "EN" ? "Our Curriculum" : "Mtaala Wetu"}
        </h1>
        <p>
          {language === "EN"
            ? "A comprehensive bilingual curriculum designed to develop critical thinking, creativity, and global competence."
            : "Mtaala kamili wa lugha mbili ulioundwa kuendeleza ufikiri wa kina, ubunifu na ushindani wa kimataifa."}
        </p>
      </div>

      <div className={styles.curriculumContent}>
        {/* Teaching Methodology */}
        <div className={styles.methodology}>
          <h2>{language === "EN" ? "Teaching Methodology" : "Njia ya Ufundishaji"}</h2>
          <p>
            {language === "EN"
              ? "Our approach combines traditional learning with modern pedagogical techniques, emphasizing active learning, critical thinking, and practical application of knowledge."
              : "Njia yetu inaunganisha ujifunzaji wa jadi na mbinu za kisasa za ufundishaji, inayolenga ujifunzaji bora, kufikiri kwa kina, na matumizi ya vitendo vya maarifa."}
          </p>
        </div>

        {/* Nursery Section */}
        <div className={styles.programSection}>
          <h2>{language === "EN" ? "Nursery Programme" : "Programu ya Chekechea"}</h2>
          <p className={styles.ageGroup}>
            {language === "EN" ? "Ages 2-5 years" : "Umri wa miaka 2-5"}
          </p>
          <p>
            {language === "EN"
              ? "Our nursery programme focuses on foundational learning through play-based activities, social development, and early language acquisition in both English and Swahili."
              : "Programu yetu ya chekechea inalenga ujifunzaji wa msingi kupitia shughuli za kucheza, maendeleo ya kijamii, na kujua lugha mapema za Kiingereza na Kiswahili."}
          </p>

          <div className={styles.subjectsGrid}>
            <div className={styles.subjectCard}>
              <h3>{language === "EN" ? "Language & Literacy" : "Lugha na Kusoma"}</h3>
              <ul>
                <li>{language === "EN" ? "English language development" : "Maendeleo ya Kiingereza"}</li>
                <li>{language === "EN" ? "Swahili language foundations" : "Misingi ya Kiswahili"}</li>
                <li>{language === "EN" ? "Letter recognition & phonics" : "Kutambua herufi na sauti"}</li>
                <li>{language === "EN" ? "Early writing skills" : "Ujuzi wa kuandika wa mapema"}</li>
              </ul>
            </div>

            <div className={styles.subjectCard}>
              <h3>{language === "EN" ? "Mathematics" : "Hesabu"}</h3>
              <ul>
                <li>{language === "EN" ? "Number recognition" : "Utambuzi wa namba"}</li>
                <li>{language === "EN" ? "Counting & basic concepts" : "Kuhesabu na dhana za msingi"}</li>
                <li>{language === "EN" ? "Shape & pattern recognition" : "Kutambua muundo na mifumo"}</li>
                <li>{language === "EN" ? "Problem-solving through play" : "Kutatua matatizo kupitia mchezo"}</li>
              </ul>
            </div>

            <div className={styles.subjectCard}>
              <h3>{language === "EN" ? "Science & Nature" : "Sayansi na Asili"}</h3>
              <ul>
                <li>{language === "EN" ? "Exploration of natural world" : "Kuchunguza dunia ya kawaida"}</li>
                <li>{language === "EN" ? "Environmental awareness" : "Fahamu ya mazingira"}</li>
                <li>{language === "EN" ? "Basic scientific concepts" : "Dhana za msingi za sayansi"}</li>
                <li>{language === "EN" ? "Sensory activities" : "Shughuli za ufahamu"}</li>
              </ul>
            </div>

            <div className={styles.subjectCard}>
              <h3>{language === "EN" ? "Arts & Creativity" : "Sanaa na Ubunifu"}</h3>
              <ul>
                <li>{language === "EN" ? "Drawing & painting" : "Kuchora na upakaji rangi"}</li>
                <li>{language === "EN" ? "Music & movement" : "Muziki na mienendo"}</li>
                <li>{language === "EN" ? "Creative expression" : "Kuonyesha ubunifu"}</li>
                <li>{language === "EN" ? "Craft activities" : "Shughuli za ufinyanzi"}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Primary Section */}
        <div className={styles.programSection}>
          <h2>{language === "EN" ? "Primary Programme" : "Programu ya Msingi"}</h2>
          <p className={styles.ageGroup}>
            {language === "EN" ? "Ages 5-12 years | Classes 1-7" : "Umri wa miaka 5-12 | Darasa la 1-7"}
          </p>
          <p>
            {language === "EN"
              ? "Our primary programme builds on foundational skills with a comprehensive curriculum that develops academic excellence, critical thinking, and character development."
              : "Programu yetu ya msingi inajenga ujuzi wa msingi na mtaala kamili unaoboresha ubora wa kitaaluma, mafikirio ya kina, na maendeleo ya tabia."}
          </p>

          <div className={styles.subjectsGrid}>
            <div className={styles.subjectCard}>
              <h3>{language === "EN" ? "English" : "Kiingereza"}</h3>
              <ul>
                <li>{language === "EN" ? "Reading comprehension" : "Kuelewa kusoma"}</li>
                <li>{language === "EN" ? "Writing skills" : "Ujuzi wa kuandika"}</li>
                <li>{language === "EN" ? "Grammar & language structures" : "Sarufi na miundo ya lugha"}</li>
                <li>{language === "EN" ? "Literature & creative writing" : "Fasihi na ubunifu wa kuandika"}</li>
                <li>{language === "EN" ? "Public speaking & presentation" : "Kusema hadharani na kuwasilisha"}</li>
              </ul>
            </div>

            <div className={styles.subjectCard}>
              <h3>{language === "EN" ? "Kiswahili" : "Kiswahili"}</h3>
              <ul>
                <li>{language === "EN" ? "Native language development" : "Maendeleo ya lugha ya asili"}</li>
                <li>{language === "EN" ? "Reading & comprehension" : "Kusoma na kuelewa"}</li>
                <li>{language === "EN" ? "Writing & composition" : "Kuandika na kutunga"}</li>
                <li>{language === "EN" ? "Kiswahili literature" : "Fasihi ya Kiswahili"}</li>
                <li>{language === "EN" ? "Cultural heritage & traditions" : "Urithi wa kitamaduni na mila"}</li>
              </ul>
            </div>

            <div className={styles.subjectCard}>
              <h3>{language === "EN" ? "Mathematics" : "Hesabu"}</h3>
              <ul>
                <li>{language === "EN" ? "Numeracy & operations" : "Ujuzi wa kubaini na shughuli"}</li>
                <li>{language === "EN" ? "Fractions & decimals" : "Sehemu na desimali"}</li>
                <li>{language === "EN" ? "Geometry & measurement" : "Jiometri na vipimo"}</li>
                <li>{language === "EN" ? "Algebra basics" : "Misingi ya algebra"}</li>
                <li>{language === "EN" ? "Problem-solving strategies" : "Mbinu za kutatua tatizo"}</li>
              </ul>
            </div>

            <div className={styles.subjectCard}>
              <h3>{language === "EN" ? "Science" : "Sayansi"}</h3>
              <ul>
                <li>{language === "EN" ? "Biology (living organisms)" : "Biolojia (viumbe hai)"}</li>
                <li>{language === "EN" ? "Chemistry (basic concepts)" : "Kemia (dhana za msingi)"}</li>
                <li>{language === "EN" ? "Physics (forces & energy)" : "Fizikia (nguvu na nishati)"}</li>
                <li>{language === "EN" ? "Environmental science" : "Sayansi ya mazingira"}</li>
                <li>{language === "EN" ? "Practical experiments & labs" : "Majaribio ya vitendo na maabara"}</li>
              </ul>
            </div>

            <div className={styles.subjectCard}>
              <h3>{language === "EN" ? "Social Studies" : "Masomo ya Jamii"}</h3>
              <ul>
                <li>{language === "EN" ? "Geography (continents, cultures)" : "Jiografia (mabara, tamaduni)"}</li>
                <li>{language === "EN" ? "History (local & world)" : "Historia (ndani na dunia)"}</li>
                <li>{language === "EN" ? "Civics & citizenship" : "Uraia na ujamii"}</li>
                <li>{language === "EN" ? "Map skills & spatial awareness" : "Ujuzi wa ramani na fahamu ya nafasi"}</li>
              </ul>
            </div>

            <div className={styles.subjectCard}>
              <h3>{language === "EN" ? "Arts & Technology" : "Sanaa na Teknolojia"}</h3>
              <ul>
                <li>{language === "EN" ? "Visual arts (drawing, painting)" : "Sanaa kamata (kuchora, kupaka rangi)"}</li>
                <li>{language === "EN" ? "Music & performing arts" : "Muziki na sanaa za maonyesho"}</li>
                <li>{language === "EN" ? "Digital literacy & coding" : "Ujuzi wa kidijitali na coding"}</li>
                <li>{language === "EN" ? "Design thinking" : "Mafikirio ya muundo"}</li>
                <li>{language === "EN" ? "Robotics & STEM projects" : "Uroboti na miradi ya STEM"}</li>
              </ul>
            </div>

            <div className={styles.subjectCard}>
              <h3>{language === "EN" ? "Physical Education" : "Elimu ya Mwili"}</h3>
              <ul>
                <li>{language === "EN" ? "Sports & athletics" : "Michezo na riadha"}</li>
                <li>{language === "EN" ? "Team sports (football, netball)" : "Michezo ya timu (mpira, netball)"}</li>
                <li>{language === "EN" ? "Health & wellness" : "Afya na maendeleo bora"}</li>
                <li>{language === "EN" ? "Fitness & coordination" : "Kuwa na nguvu na kuratibu"}</li>
              </ul>
            </div>

            <div className={styles.subjectCard}>
              <h3>{language === "EN" ? "Character Development" : "Maendeleo ya Tabia"}</h3>
              <ul>
                <li>{language === "EN" ? "Leadership skills" : "Ujuzi wa uongozi"}</li>
                <li>{language === "EN" ? "Values & ethics" : "Thamani na maadili"}</li>
                <li>{language === "EN" ? "Teamwork & collaboration" : "Kazi ya timu na kushirikiana"}</li>
                <li>{language === "EN" ? "Conflict resolution" : "Kutatua migogoro"}</li>
                <li>{language === "EN" ? "Life skills & emotional intelligence" : "Ujuzi wa maisha na akili ya hisia"}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Assessments */}
        <div className={styles.assessments}>
          <h2>{language === "EN" ? "Assessment Methods" : "Njia za Tathmini"}</h2>
          <ul className={styles.assessmentList}>
            <li>{language === "EN" ? "Continuous classroom assessments (CCA)" : "Tathmini endelevu ya darasani (CCA)"}</li>
            <li>{language === "EN" ? "Formative tests & quizzes" : "Vipimo vya umbo na maswali"}</li>
            <li>{language === "EN" ? "Projects-based assessments" : "Tathmini kulingana na miradi"}</li>
            <li>{language === "EN" ? "Practical demonstrations & presentations" : "Maonyesho ya vitendo na uwasilishaji"}</li>
            <li>{language === "EN" ? "End-of-term & annual exams" : "Vipimo vya mwisho wa muhula na kila mwaka"}</li>
            <li>{language === "EN" ? "Holistic evaluation (academic, social, behavioral)" : "Tathmini kamili (kitaaluma, kijamii, tabia)"}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

Curriculum.propTypes = {
  language: PropTypes.string.isRequired
};

export default Curriculum;
