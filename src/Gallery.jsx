import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './css files/Gallery.module.css';

function Gallery({ language }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  // Sample gallery data - replace with actual images
  const galleryItems = [
    {
      id: 1,
      category: 'academic',
      title: language === "EN" ? "Classroom Learning" : "Ujifunzaji wa Darasani",
      image: "https://via.placeholder.com/300x200?text=Classroom",
      description: language === "EN" ? "Students engaged in interactive learning" : "Wanafunzi kwenye ujifunzaji wenye ushiriki"
    },
    {
      id: 2,
      category: 'sports',
      title: language === "EN" ? "Football Tournament" : "Mashindano ya Mpira",
      image: "https://via.placeholder.com/300x200?text=Football",
      description: language === "EN" ? "Annual sports day football competition" : "Mashindano ya siku ya mpira ya kila mwaka"
    },
    {
      id: 3,
      category: 'events',
      title: language === "EN" ? "School Assembly" : "Mkutano wa Shule",
      image: "https://via.placeholder.com/300x200?text=Assembly",
      description: language === "EN" ? "Morning assembly and announcements" : "Mkutano wa asubuhi na matangazo"
    },
    {
      id: 4,
      category: 'facilities',
      title: language === "EN" ? "Modern Classroom" : "Darasa la Kisasa",
      image: "https://via.placeholder.com/300x200?text=Facility",
      description: language === "EN" ? "State-of-the-art learning environment" : "Mazingira ya ujifunzaji ya juu"
    },
    {
      id: 5,
      category: 'academic',
      title: language === "EN" ? "Science Lab" : "Kituo cha Sayansi",
      image: "https://via.placeholder.com/300x200?text=Science",
      description: language === "EN" ? "Hands-on science experiments" : "Majaribio ya sayansi ya kuoshea"
    },
    {
      id: 6,
      category: 'sports',
      title: language === "EN" ? "Netball Championship" : "Mashindano ya Netball",
      image: "https://via.placeholder.com/300x200?text=Netball",
      description: language === "EN" ? "Girls netball team competition" : "Mashindano ya timu za netball za wasichana"
    },
    {
      id: 7,
      category: 'events',
      title: language === "EN" ? "Cultural Day" : "Siku ya Tamaduni",
      image: "https://via.placeholder.com/300x200?text=Culture",
      description: language === "EN" ? "Students celebrate cultural heritage" : "Wanafunzi wanasheherekea urithi wa utamaduni"
    },
    {
      id: 8,
      category: 'facilities',
      title: language === "EN" ? "Library" : "Maktaba",
      image: "https://via.placeholder.com/300x200?text=Library",
      description: language === "EN" ? "Well-stocked digital library" : "Maktaba yenye vitabu vya kidijitali"
    },
    {
      id: 9,
      category: 'academic',
      title: language === "EN" ? "Computer Lab" : "Kituo cha Kompyuta",
      image: "https://via.placeholder.com/300x200?text=Computer",
      description: language === "EN" ? "Digital literacy and coding sessions" : "Vipindi vya ujuzi wa kidijitali na coding"
    }
  ];

  const filteredItems = filterCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filterCategory);

  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryHeader}>
        <h1>
          {language === "EN" ? "School Gallery" : "Picha za Shule"}
        </h1>
        <p>
          {language === "EN"
            ? "Explore moments from our school community - academics, sports, events, and facilities."
            : "Chunguza matukio kutoka jamii yetu ya shule - vitaaluma, michezo, matukio, na sehemu."}
        </p>
      </div>

      {/* Filter Categories */}
      <div className={styles.filterContainer}>
        <button
          className={`${styles.filterButton} ${filterCategory === 'all' ? styles.active : ''}`}
          onClick={() => setFilterCategory('all')}
        >
          {language === "EN" ? "All" : "Yote"}
        </button>
        <button
          className={`${styles.filterButton} ${filterCategory === 'academic' ? styles.active : ''}`}
          onClick={() => setFilterCategory('academic')}
        >
          {language === "EN" ? "Academic" : "Kitaaluma"}
        </button>
        <button
          className={`${styles.filterButton} ${filterCategory === 'sports' ? styles.active : ''}`}
          onClick={() => setFilterCategory('sports')}
        >
          {language === "EN" ? "Sports" : "Michezo"}
        </button>
        <button
          className={`${styles.filterButton} ${filterCategory === 'events' ? styles.active : ''}`}
          onClick={() => setFilterCategory('events')}
        >
          {language === "EN" ? "Events" : "Matukio"}
        </button>
        <button
          className={`${styles.filterButton} ${filterCategory === 'facilities' ? styles.active : ''}`}
          onClick={() => setFilterCategory('facilities')}
        >
          {language === "EN" ? "Facilities" : "Sehemu"}
        </button>
      </div>

      {/* Gallery Grid */}
      <div className={styles.galleryGrid}>
        {filteredItems.map((item) => (
          <div key={item.id} className={styles.galleryItem}>
            <img
              src={item.image}
              alt={item.title}
              onClick={() => setSelectedImage(item)}
              className={styles.galleryImage}
            />
            <div className={styles.galleryInfo}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Full Image View */}
      {selectedImage && (
        <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} className={styles.modalImage} />
            <div className={styles.modalInfo}>
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

Gallery.propTypes = {
  language: PropTypes.string.isRequired
};

export default Gallery;
