import PropTypes from 'prop-types';
import styles from './css files/About.module.css';

function About({ language }) {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutHeader}>
        <h1>
          {language === "EN" ? "About Willialmo School" : "Kuhusu Shule ya Willialmo"}
        </h1>
        <p>
          {language === "EN" 
            ? "Building excellence in education through innovation, bilingual learning, and holistic development." 
            : "Kujenga utangulizi katika elimu kupitia bunifu, ujifunzaji wa lugha mbili, na maendeleo ya jumla."}
        </p>
      </div>

      <div className={styles.aboutContent}>
        {/* Mission & Vision */}
        <div className={styles.missionVision}>
          <div className={styles.card}>
            <h2>{language === "EN" ? "Our Mission" : "Malengo Yetu"}</h2>
            <p>
              {language === "EN"
                ? "To provide quality, bilingual education that develops critical thinking, creativity, and social responsibility in every student, preparing them to become global citizens and leaders in their communities."
                : "Kutoa elimu ya ubora, ya lugha mbili, inayotengeneza mafikira ya kina, uweza wa mvumaji, na dhima ya kijamii kwa kila mwanafunzi, kuwakandamiza kuwa raia wa kimataifa na viongozi katika jamii zao."}
            </p>
          </div>

          <div className={styles.card}>
            <h2>{language === "EN" ? "Our Vision" : "Maono Yetu"}</h2>
            <p>
              {language === "EN"
                ? "To be the leading institution for bilingual education in East Africa, known for excellence, innovation, and developing well-rounded individuals who make positive impacts in society."
                : "Kuwa taasisi inayoongoza kwa elimu ya lugha mbili katika Afrika Mashariki, inajulikana kwa ubora, bunifu, na kuendeleza watu wenye ujuzi kamili wanaofanya athari chanya katika jamii."}
            </p>
          </div>
        </div>

        {/* History */}
        <div className={styles.history}>
          <h2>{language === "EN" ? "Our Story" : "Hadithi Yetu"}</h2>
          <p>
            {language === "EN"
              ? "Willialmo School was founded with a vision to create an inclusive, progressive learning environment that celebrates both English and Swahili languages and cultures. Since our inception, we have been committed to providing top-quality education that nurtures not just academic excellence, but also character development, creativity, and leadership skills."
              : "Shule ya Willialmo ilianzishwa kwa muonekano wa kujenga mazingira ya ujifunzaji yenye ujamii, ya kisasa inayoadhimisha lugha na tamaduni zote za Kiingereza na Kiswahili. Tangu kuanzishwa, tumejitolea kutoa elimu ya ubora inayolegeza si tu utangulizi wa kitaaluma, bali pia maendeleo ya tabia, uweza wa mvumaji, na ujuzi wa uongozi."}
            </p>
          </div>

        {/* Leadership */}
        <div className={styles.leadership}>
          <h2>{language === "EN" ? "Leadership Team" : "Timu ya Uongozi"}</h2>
          <div className={styles.leadershipGrid}>
            <div className={styles.leaderCard}>
              <h3>{language === "EN" ? "Principal" : "Mkuu"}</h3>
              <p className={styles.leaderName}>Mr. Beatus Mloka</p>
              <p>
                {language === "EN"
                  ? "Leading academic excellence and institutional vision"
                  : "Kuongoza utangulizi wa kitaaluma na muonekano wa taasisi"}
              </p>
            </div>

            <div className={styles.leaderCard}>
              <h3>{language === "EN" ? "Head of Primary" : "Mkuu wa Msingi"}</h3>
              <p className={styles.leaderName}>Mrs. Magreth Mushi</p>
              <p>
                {language === "EN"
                  ? "Overseeing primary education curriculum and standards"
                  : "Kusimamia mafunzo ya msingi na viwango vya ubora"}
              </p>
            </div>

            <div className={styles.leaderCard}>
              <h3>{language === "EN" ? "Head of Nursery" : "Mkuu wa Chekechea"}</h3>
              <p className={styles.leaderName}>Ms. Allena Mloka</p>
              <p>
                {language === "EN"
                  ? "Nurturing early childhood development and learning"
                  : "Kuboresha maendeleo ya watoto wadogo na ujifunzaji"}
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className={styles.achievements}>
          <h2>{language === "EN" ? "Our Achievements" : "Mafanikio Yetu"}</h2>
          <ul className={styles.achievementsList}>
            <li>
              {language === "EN"
                ? "✓ Bilingual curriculum recognized for excellence"
                : "✓ Mtaala wa lugha mbili unajulikana kwa ubora"}
            </li>
            <li>
              {language === "EN"
                ? "✓ 95% student progression rate to secondary education"
                : "✓ Kiwango cha 95% cha wanafunzi kuendelea elimu ya sekondari"}
            </li>
            <li>
              {language === "EN"
                ? "✓ Award for Best Bilingual Institution 2024"
                : "✓ Tuzo ya Taasisi Bora ya Lugha Mbili 2024"}
            </li>
            <li>
              {language === "EN"
                ? "✓ State-of-the-art learning facilities"
                : "✓ Sehemu za juu zaidi za ujifunzaji"}
            </li>
            <li>
              {language === "EN"
                ? "✓ Holistic development programs (sports, arts, leadership)"
                : "✓ Programu za maendeleo ya jumla (michezo, sanaa, uongozi)"}
            </li>
          </ul>
        </div>

        {/* Location */}
        <div className={styles.location}>
          <h2>{language === "EN" ? "Our Location" : "Mahali Petu"}</h2>
          <p>
            {language === "EN"
              ? "Located in a serene, secure environment with modern transportation links, making accessibility easy for parents and students."
              : "Iko katika mazingira yenye amani, salama na miunganisho bora ya usafiri, yanarahisisha kufikiwa kirahisi na wazazi na wanafunzi."}
          </p>
          <p className={styles.address}>
            {language === "EN" ? "Address: " : "Anuani: "}
            Willialmo School, Ukonga, Dar es Salaam, Tanzania
          </p>
          <p className={styles.contact}>
            {language === "EN" ? "Phone: " : "Simu: "}
            +255 747 945 986
          </p>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  language: PropTypes.string.isRequired
};

export default About;
