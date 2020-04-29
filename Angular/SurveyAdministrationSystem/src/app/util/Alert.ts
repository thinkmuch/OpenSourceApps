import Swal from 'sweetalert2';

export class Alert {
    
    static success(title: string) {
        Swal.fire({
            title: title,
            icon: 'success'
        });
    }
}