import styles from "../css/ProgressBar.module.css";
import { CgComment, CgLoadbarAlt } from "react-icons/cg";

interface ProgressBarProps {
  totalCount: number;
  completedCount: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  const progressPecentage = Math.floor((props.completedCount / props.totalCount) * 100);

  const progress = {
    width: `${progressPecentage}%`
  };

  const comment = () => {
    if (progressPecentage < 51) {
      return "아직 할 일이 많이 남았어요. 좀만 더 힘내세요!";
    }
    if (progressPecentage < 81) {
      return "할 일을 많이 끝냈어요. 남은 일도 힘내세요!";
    }
    if (progressPecentage < 100) {
      return "거의 다 완료했어요. 대단해요!";
    }
    if (progressPecentage === 100) {
      return "모든 일을 완료했어요. 고생하셨어요!";
    }
  };

  return (
    <>
      <div className={styles.title}>
        <CgLoadbarAlt className={styles.icons} />
        My to-do Progress
      </div>
      <div className={styles.barWrapper}>
        <div className={styles.progressBar}>
          <div style={progress} className={styles.progress}>
            <div>{progressPecentage}%</div>
          </div>
        </div>
      </div>
      <div className={styles.comment}>
        <CgComment />
        <span className={styles.commentColor}>{comment()}</span>
      </div>
    </>
  );
}
