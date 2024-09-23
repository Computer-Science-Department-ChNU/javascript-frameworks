<script>
export default {
  data() {
    return {
      name: '',
      age: 0,
      aboveAge: false
    }
  },

  computed: {
    displayProfile() {
      return `My name is ${this.name} and i am ${this.age}`;
    }
  },

  methods: {
    verifyUser() {
      this.aboveAge = this.age >= 18;
    },
  },

  mounted() {
    console.log('Application mounted');
  },
}
</script>