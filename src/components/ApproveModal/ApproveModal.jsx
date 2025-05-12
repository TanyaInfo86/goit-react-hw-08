import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./ApproveModal.module.css";
import toast from "react-hot-toast";
import { RiDeleteBin7Line } from "react-icons/ri";

const ApproveModal = ({ isOpen, onClose, contact }) => {
    const dispatch = useDispatch();

    if (!isOpen) return null;

    const handleDelete = () => {
        dispatch(deleteContact(contact.id))
            .unwrap()
            .then(() => {
                toast(`Contact "${contact.name}" deleted!`, {
                    icon: <RiDeleteBin7Line size="20px" color="#7d3f3f" />,
                });
                onClose();
            })
            .catch(() => {
                toast.error(`Failed to delete contact "${contact.name}"`);
            });
    };
    return (
        <div className={css.backdrop}>
            <div className={css.modal}>
                <p className={css.text}>
                    Are you sure you want to delete "{contact.name}"?
                </p>
                <button onClick={handleDelete} className={css.btnAccept}>
                    Yes
                </button>
                <button onClick={onClose} className={css.btnDecline}>
                    No
                </button>
            </div>
        </div>
    );
};

export default ApproveModal;