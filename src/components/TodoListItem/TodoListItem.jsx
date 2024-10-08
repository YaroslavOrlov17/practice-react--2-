import { GridItem, Text } from '..';
import style from './TodoListItem.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';

export const TodoListItem = ({ text, counter, handleDelete, id }) => {
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => handleDelete(id)}
        >
          <RiDeleteBinLine size={24} />
        </button>
      </div>
    </GridItem>
  );
};
