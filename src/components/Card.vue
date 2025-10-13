<!-- src/components/FeatureCard.vue -->
<template>
  <div class="card card-border flex-auto bg-base-100 w-96 m-5 shadow-sm hover:shadow-md transition">
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="card-actions justify-end">
        <a :href="link" target="_blank" class="btn btn-primary">{{ buttonText }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: "#"
    },
    buttonText: {
      type: String,
      default: "Try Now!"
    }
  }
};
</script>
