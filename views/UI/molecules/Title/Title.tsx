import Headings from '../../atoms/Headings/Headings';
import { ListTodo } from 'lucide-preact';
import styles from'./Title.module.css';

const Title = () =>{
    return (
      <div className={styles.Title}>
        <ListTodo className={styles.Title_Icon}/>
        <Headings
          Text="To do"
          TypeHeader="h1"
          CustomClass={styles.Title_Text}
        />
      </div>
    );
}

export default Title;