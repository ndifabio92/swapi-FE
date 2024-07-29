import Swal, { SweetAlertIcon } from "sweetalert2"

interface Props {
    icon: SweetAlertIcon | undefined,
    title: string,
    text: string
}

export const swalAlert = ({ icon, title, text }: Props) => {
    return (
        Swal.fire({
            icon,
            title,
            text
        })
    )
}