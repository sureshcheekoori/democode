document.addEventListener('alpine:init', () => {
    Alpine.data('alldata', () => ({
        open: false,
        test: 'hi',
        directus: null,
        services: null,
        testimonials: null,
        contact: {
name: null,
email_address: null,
project_info: null
        },
        init() {

            (async () => {

                this.directus = new DirectusSdk.Directus('http://localhost:8055');



                let res = await this.directus.items('services').readByQuery({ limit: -1 });
                this.services = res.data;
                console.log(res.data);

                let res2 = await this.directus.items('testimonials').readByQuery({ limit: -1 });
                this.testimonials = res2.data;
                console.log(res.data);

            })();

        }
    }))
})
