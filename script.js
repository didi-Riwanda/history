    var form, angka1, angka2, hasil;
    form = document.getElementById("kalkulator");

    function tambah(){           
        angka1 = parseFloat(form.angka1.value);
        angka2 = parseFloat(form.angka2.value);

        if (isNaN(angka1) || isNaN(angka2)) {
            const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

            const alert = (message, type) => {
                const wrapper = document.createElement('div')
                wrapper.innerHTML = [
                    `<div class="mt-3 alert alert-${type} alert-dismissible" role="alert">`,
                    `   <div>${message}</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                    '</div>'
                ].join('')

                alertPlaceholder.append(wrapper)
            }

            const alertTrigger = document.getElementById('alertTambah')
            if (alertTrigger) {
                alertTrigger = alert('Silahkan masukkan angka!', 'danger');              
            }

        }else{
            hasil = angka1 + angka2
            form.hasil.value = hasil;
        }
            
    }

    function kurang(){    
        angka1 = parseFloat(form.angka1.value);
        angka2 = parseFloat(form.angka2.value);  
        
        if (isNaN(angka1) || isNaN(angka2)) {
            const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

            const alert = (message, type) => {
                const wrapper = document.createElement('div')
                wrapper.innerHTML = [
                    `<div class="mt-3 alert alert-${type} alert-dismissible" role="alert">`,
                    `   <div>${message}</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                    '</div>'
                ].join('')

                alertPlaceholder.append(wrapper)
            }

            const alertTrigger = document.getElementById('alertKurang')
            if (alertTrigger) {
                alertTrigger = alert('Silahkan masukkan angka!', 'danger');              
            }
        }else{
            hasil = angka1 - angka2;
            form.hasil.value = hasil;
        }
    }

    function kali() {          
        angka1 = parseFloat(form.angka1.value);
        angka2 = parseFloat(form.angka2.value);

        if (isNaN(angka1) || isNaN(angka2)) {
            const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

            const alert = (message, type) => {
                const wrapper = document.createElement('div')
                wrapper.innerHTML = [
                    `<div class="mt-3 alert alert-${type} alert-dismissible" role="alert">`,
                    `   <div>${message}</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                    '</div>'
                ].join('')

                alertPlaceholder.append(wrapper)
            }

            const alertTrigger = document.getElementById('alertKali')
            if (alertTrigger) {
                alertTrigger = alert('Silahkan masukkan angka!', 'danger');              
            }
        }else{
            hasil = angka1 * angka2;
            form.hasil.value = hasil;
        }
    }

    function bagi(){    
        angka1 = parseFloat(form.angka1.value);
        angka2 = parseFloat(form.angka2.value); 
            
        if (isNaN(angka1) || isNaN(angka2)) {
            const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

            const alert = (message, type) => {
                const wrapper = document.createElement('div')
                wrapper.innerHTML = [
                    `<div class="mt-3 alert alert-${type} alert-dismissible" role="alert">`,
                    `   <div>${message}</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                    '</div>'
                ].join('')

                alertPlaceholder.append(wrapper)
            }

            const alertTrigger = document.getElementById('alertBagi')
            if (alertTrigger) {
                alertTrigger = alert('Silahkan masukkan angka!', 'danger');              
            }
        }else{
            hasil = angka1 / angka2;
            form.hasil.value = hasil;
        }
    }

    function pangkat(){
        angka1 = parseFloat(form.angka1.value);
        angka2 = parseFloat(form.angka2.value);

        if (isNaN(angka1) || isNaN(angka2)) {
            const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

            const alert = (message, type) => {
                const wrapper = document.createElement('div')
                wrapper.innerHTML = [
                    `<div class="mt-3 alert alert-${type} alert-dismissible" role="alert">`,
                    `   <div>${message}</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                    '</div>'
                ].join('')

                alertPlaceholder.append(wrapper)
            }

            const alertTrigger = document.getElementById('alertPangkat')
            if (alertTrigger) {
                alertTrigger = alert('Silahkan masukkan angka!', 'danger');              
            }
        }else{
            hasil = Math.pow(angka1,angka2);
            form.hasil.value = hasil;
        }
    }

    function hapus(){
        form.reset();
    }