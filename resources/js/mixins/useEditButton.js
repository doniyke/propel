export default {
  emits: ['edit-button-clicked'], // Declare the emitted event in the mixin
  props: {
    userProfileInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    editButtonClicked() {
      this.$emit('edit-button-clicked');
    },
  },
};
