import Swal from 'sweetalert2';

export class Alert {
    
    static success(title: string) {
        Swal.fire({
            title: title,
            icon: 'success'
        });
    }

    static Danger(title: string, text: string) {
        Swal.fire({
            title: title,
            text: text,
            icon: 'warning'
        });
    }
}