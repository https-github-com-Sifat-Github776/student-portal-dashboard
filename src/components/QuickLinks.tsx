import styles from '@/components/layout/QuickLinks.module.css';

const QuickLinks = () => {
  return (
    <div className={`hover:cursor-auto ${styles.quickLinksContainer}`}>
      <h2 className={styles.title}>Quick Links</h2>
      
      <div className={`${styles.card} bg-indigo-600 hover:bg-white group`}>
        <div className={styles.icon}>📚</div>
        <h3 className={`${styles.text} group-hover:text-indigo-600`}>Canvas LMS</h3>
        <p className={`${styles.para} group-hover:text-indigo-600`}>Click here to access your LMS portal for assignments, class recordings and notes.</p>
      </div>
      
      <div className={`${styles.card} bg-pink-400 hover:bg-white group`}>
        <div className={styles.icon}>🖥️</div>
        <h3 className={`${styles.text} group-hover:text-pink-400`}>Join Live Class</h3>
        <p className={`${styles.para} group-hover:text-pink-400`}>Class 7 Math is starting in <strong>1 hour, 35 minutes</strong>.</p>
      </div>
      
      <div className={`${styles.card} bg-blue-600 hover:bg-white group`}>
        <div className={styles.icon}>📞</div>
        <h3 className={`${styles.text} group-hover:text-blue-600`}>Contact Teacher</h3>
        <p className={`${styles.para} group-hover:text-blue-600`}>Click here to contact your teacher for any doubts or concerns.</p>
      </div>
    </div>
  );
};

export default QuickLinks;
