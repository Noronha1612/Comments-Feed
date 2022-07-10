import { Trash } from 'phosphor-react';
import { useState } from 'react';
import Modal, { Styles } from 'react-modal';
import { Button } from '../../Form/Button';

import styles from './styles.module.css';

type DeleteCommentProps = {
  deleteRequest?: () => Promise<void>;
};

const defaultModalStyle: Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .75)',
  },
  content: {
    maxWidth: 432,
    height: 'fit-content',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'var(--gray-800)',
    border: 0,
    borderRadius: 8,
    padding: '1.5rem 0',
  },
};

export const DeleteComment: React.FC<DeleteCommentProps> = ({
  deleteRequest,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSuccess = async () => {
    await deleteRequest?.();

    handleCloseModal();
  };

  return (
    <>
      <Trash className={styles.deleteButton} onClick={handleOpenModal} />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Deletar comentário"
        style={defaultModalStyle}
      >
        <div className={styles.content}>
          <h1>Excluir comentário</h1>
          <p>Você tem certeza que gostaria de excluir esse comentário?</p>

          <div>
            <Button mode="default" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button mode="danger" onClick={handleSuccess}>
              Sim, excluir
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
