import { IoPersonCircleOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import style from "./Contact.module.css";
import { useToggle } from "../../hooks/useToggle";
import ContactEditModal from "../ContactEditModal/ContactEditModal";
import { FaUserEdit } from "react-icons/fa";
import ApproveModal from "../ApproveModal/ApproveModal";
import { RiDeleteBin6Line } from "react-icons/ri";

const Contact = ({ contact }) => {
    const { isOpen: isEditOpen, open: openEdit, close: closeEdit } = useToggle();
    const { isOpen: isApproveOpen, open: openApprove, close: closeApprove } = useToggle();

    return (
        <div className={style.contact}>
            <div className={style.data}>
                <p className={style.text}>
                    <IoPersonCircleOutline className={style.icon} />
                    {contact.name}
                </p>
                <p className={style.text}>
                    <BsTelephone className={style.icon} />
                    {contact.number}
                </p>
            </div>
            <div className={style.btns}>
                <button className={style.btnEdit} onClick={openEdit}>
                    <FaUserEdit size="20px" />
                </button>
                <button className={style.btnDelete} onClick={openApprove}>
                    <RiDeleteBin6Line size="20px" />
                </button>
            </div>
            {isEditOpen && (
                <ContactEditModal isOpen={isEditOpen} onClose={closeEdit} contact={contact} />
            )}
            {isApproveOpen && (
                <ApproveModal isOpen={isApproveOpen} onClose={closeApprove} contact={contact} />
            )}
        </div>
    );
};

export default Contact;