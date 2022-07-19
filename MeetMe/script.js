const app = Vue.createApp({
    data() {
        return {
            firstName: "Nik",
            lastName: "Cadez",
            picture: "https://media-exp2.licdn.com/dms/image/C4D03AQHQDU-vmX8lNw/profile-displayphoto-shrink_800_800/0/1597005278528?e=1663200000&v=beta&t=sDSDe6Mb5yo8nIRFG08HX85Glz8hcxZBYlXSjOpr3Kc",
            gender: "male",
            location: "Trzic",
            mail: "nik.cadez@icloud.com"
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            console.log(results)
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.picture = results[0].picture.large
            this.gender = results[0].gender
            this.location = results[0].location.city
            this.mail = results[0].email
        }
    }
});
app.mount("#app")